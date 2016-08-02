const DbSchema          = require('../Schemas/DbSchema')
const co                = require('co')
const _                 = require('lodash')
const Utility           = require('../Services/Utility')

class QADriver{
  constructor(){
    this.Question       = DbSchema.Question
    this.Answer         = DbSchema.Answer
    this.r              = DbSchema.r
    this.Query          = DbSchema.Query
  }

  addQuestion(question){
    const me    = this
    question    = new me.Question(question)

    return co(function*(){
      try{
        yield me.Question.save(question)
        return { msg: "Question Added", qId : question.qId}
      }catch(err){throw err}
    })
  }

  getQA(qa, id){
    const me    = this
    return co(function*(){
      try{
        if(qa == 'a')
          var doc = yield me.Answer.get(id).run()
        else
           var doc= yield me.Question.get(id).run()
        return doc
      }
      catch(err){throw "Question/Answer Id invalid bro"}
    })
  }

// if limit is not set all records will be returned
  getAnswers(qId, limit){
    const me = this
    const query = new me.Query(me.Answer, me.r)
    return co(function*(){
      try{
            var result = yield me.r.table("Answers").filter({qId}).
                orderBy(me.r.desc("aPopularity")).slice(0,limit).run()
            return result
      }
      catch(err){ throw err}
    })
  }

  getQuestionsAnsweredBy(authorName){
    const me      = this
    const query   = new DbSchema.Query(me.Answer,me.r)
    return co(function*(){
      try{
    //  FEEL FREE TO MINIMIZE THIS QUERY
    //      I HAVE NO CLUE HOW TO MINIFY
      var result = yield  me.r.table('Answers').filter({userName:authorName}).eqJoin('qId',me.r.table('Questions'))
        .map({
            "Question" : me.r.row("right"),
            "Answers"   : [me.r.row("left")]
            }).run()
           return result
      }
      catch(err){throw err}
    })
  }

  isQuestion(qId){
    const me    = this
    return co(function*(){
      try{
          let question = yield me.Question.get(qId).run()
          let result = {isValid : true, isOpen:true}
          if(question.open == false)
           result.isOpen = false
          return result
      }
      catch(err){
        return {isValid : false,isOpen:false}
      }
    })
  }

  addAnswer(answer){
    const me  = this
    answer    = me.Answer(answer)
    return co(function*(){
      try{
         yield me.Answer.save(answer)
         return {msg: "Answer added", aId : answer.aId}
      }
      catch(err){throw err}
    })
  }

  qaUpdate(qa, update){
    const me   = this
    return co(function*(){
      try{
        qa  =yield  me.getQA(qa, update[qa + 'Id'])
        let result = yield qa.merge(update).save()
        return {msg:"updation Successfull"}
      }
      catch(err){throw err}
    })
  }

  getQuestions(filters){
    const me = this
    return co(function*(){
      try{
        var table   = me.r.table("Questions")
        _.forEach(filters,(value,key)=>{
          if(_.isArray(value))
            table = table.filter(Utility.arrayFilter(value,key,me))
        })
        var records = yield table.orderBy(me.r.desc('qPopularity')).run()
        return records
      }
      catch(err){throw err}
    })
  }
}

module.exports  = QADriver
