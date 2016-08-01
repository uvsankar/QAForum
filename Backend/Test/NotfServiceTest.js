const assert        = require('chai').assert
const NotfService   = require('../Services/NotfService')
const DbSchema      = require('../Schemas/DbSchema')
const sinon         = require('sinon')
const Utility        = require('../Services/Utility')

describe('Notification Services ', function(){
  describe('Questions Listener',function(){
    var Question    = DbSchema.Question
    var notfService = new NotfService()

    before(function(){
      notfService.subscribeToDb()
      sinon.spy(notfService,"QuestionListener")
    })

    it('QuestionListener should be called', function(done){
      let question = {qId :Utility.genUID('t'), 'userName' : "test", 'question' : "hello world"}
      question     = new Question(question)
      Question.save(question).then(function(){
        assert.isOk(notfService.QuestionListener.calledOnce)
        done()
      },function(err){throw err})
    })

    after(function(){
      notfService.QuestionListener.restore()
    })
  })
})
