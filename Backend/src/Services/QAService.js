const QADriver       = require('../DbDrivers/QADriver')
const Utility        = require('./Utility')
const UserService    = require('./UserService')
const co             = require('co')
const _              = require('lodash')
const ElasticDriver  = require('../DbDrivers/ElasticDriver')

class QAService{
  constructor(){
    this.qaDriver     = new QADriver()
    this.userService  = new UserService()
    this.elastic      = new ElasticDriver('qa', 'questions')
  }

  addQuestion(question){
    const me = this
    question['qId'] = Utility.genUID('q')

    return co(function* (){
      try{
          let isUser = yield  me.userService.isUserExist(question.userName)
          if(isUser == false)
              throw("Question Author not registered")

          let result = yield me.qaDriver.addQuestion(question)
          return result
      }
      catch(err){ throw err  }
    })
  }

  isQuestion(qId){
    const me  = this
    return me.qaDriver.isQuestion(qId)
  }

  addAnswer(answer){
    const me = this
    answer['aId'] = Utility.genUID('a')

    return co(function*(){
      try{
        let question = yield me.isQuestion(answer.qId)
        let isUser   = yield me.userService.isUserExist(answer.userName)
        if(isUser == false)
          throw "First login and then answer the questions"

        if(!(question.isValid && question.isOpen ))
          throw "Question not exist / not open"
        return  yield me.qaDriver.addAnswer(answer)
      }
      catch(err){throw err}
    })
  }

  qaUpdate(qa,upvoterName, update){
    const me  = this
    return co(function* (){
      try{
        let doc         =  yield me.qaDriver.getQA(qa, update[qa+ "Id"])
        let user        = yield me.userService.getUser(doc.userName)

        let popularity  = doc[qa + 'Popularity']
        yield me.userService.updateUser({
          userName : user.userName,
          rating   : user.rating + 1
          })
        if(update[qa + 'Popularity'])
          update[qa + 'Popularity'] += popularity

         return yield me.qaDriver.qaUpdate(qa,update)
       }
       catch(err){throw err}
    })
  }

  getAnswersOfUser(userName){
    const me  = this
    return co(function*(){
      try{
        let result = me.qaDriver.getQuestionsAnsweredBy(userName)
        return result
      }
      catch(err){throw err}
    })
  }

  getAllAnswers(qId){
    const me = this
    return co(function*(){
      try{
         var Question = yield me.qaDriver.getQA('q', qId)
         var Answers  = yield me.qaDriver.getAnswers(qId)
         var result = {
           Question,
           Answers
         }
         return [result]
      }
      catch(err){throw err}
    })
  }

  getQuestionsForUser(userName, topics){
    const me = this
    return co(function*(){
      try{
          var tags, user
          if(userName == undefined || userName =="" )
            tags = topics
          else{
            user       = yield me.userService.getUser(userName)
            tags       = user.topics
          }
          var Questions  = yield me.qaDriver.getQuestions({tags: tags})
          var result     = me.appendAnswers(Questions)
          return result
      }
      catch(err){throw err}
    })
  }

  appendAnswers(Questions){
    const me = this
    return co(function*(){
      try{
        var result     = []
        for(var i=0 ; i<Questions.length;i++){
          var answers = yield me.qaDriver.getAnswers(Questions[i].qId, 1)
          result.push({
            Question : Questions[i],
            Answers  : answers
          })
      }
      return result
    }
      catch(err){throw err}
  })
}

  getRelatedQuestions(searchTerm){
    const me  = this
    return co(function*(){
      try{
        var Questions = yield  me.elastic.searchQuestions(searchTerm)
        var qa        = yield me.appendAnswers(Questions)
        return qa
      }
      catch(err){throw err}
    })
  }

}

module.exports    = QAService
