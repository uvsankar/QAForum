const DbSchema          = require('../Schemas/DbSchema')
const co                = require('co')

class QADriver{
  constructor(){
    this.Question       = DbSchema.Question
    this.Answer         = DbSchema.Answer
  }

  addQuestion(question){
    const me    = this
    question    = new me.Question(question)

    return co(function*(){
      try{
        yield me.Question.save(question)
        return {
          msg: "Question Added"
        }
      }catch(err){
        throw err
      }
    })
  }
  
}

module.exports  = QADriver
