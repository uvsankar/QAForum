const QADriver       = require('../DbDrivers/QADriver')
const Utility        = require('./Utility')
const UserService    = require('./UserService')
const co             = require('co')

class QAService{
  constructor(){
    this.qaDriver     = new QADriver()
    this.userService  = new UserService()
  }

  addQuestion(question){
    const me = this
    question['qId'] = Utility.genUID('q')

    return co(function* (){
      try{
          if(me.userService.isUserExist(question.userName) == false)
              throw("Question Author not registered")

          var result = me.qaDriver.addQuestion(question)
          return result
      }
      catch(err){
        throw err
      }
    })
  }
}

module.exports    = QAService
