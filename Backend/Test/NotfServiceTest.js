const assert        = require('chai').assert
const NotfService   = require('../src/Services/NotfService')
const DbSchema      = require('../src/Schemas/DbSchema')
const sinon         = require('sinon')
const Utility       = require('../src/Services/Utility')
const co            = require('co')

describe('Notification Services ', function(){

    var Question    = DbSchema.Question
    var Answer      = DbSchema.Answer
    var User        = DbSchema.User
    var notfService = new NotfService()

    before(function(){
      notfService.subscribeToDb()
      sinon.spy(notfService,"QuestionListener")
      sinon.spy(notfService,"AnswerListener")
    })

    after(function(done){
      notfService.QuestionListener.restore()
      notfService.AnswerListener.restore()
      var promise = DbSchema.r.table("Notifications").delete().run()
      promise.then(()=>{done()},(err)=>{done(err)})
    })

    it('QuestionListener,ElasticDriver, pushNotification should be called', function(done){
      let question = {qId :Utility.genUID('t'), 'userName' : "test", 'question' : "hello world"}
      question     = new Question(question)
      sinon.spy(notfService.elastic, "insert")
      sinon.spy(notfService,"pushNotification")

      Question.save(question).then(function(){
        assert.isOk(notfService.QuestionListener.calledOnce)
        assert.isOk(notfService.elastic.insert.calledOnce)
        assert.isOk(notfService.pushNotification.calledOnce)
        notfService.elastic.insert.restore()
        notfService.pushNotification.restore()
        done()
      },function(err){throw err})
    })

    it("AnswerListener should be called", function(done){
      let answer = {aId : Utility.genUID('t'),'answer' : "test", 'qId' : 'testq', 'userName' :"test"}
      answer     = new Answer(answer)
      Answer.save(answer).then(function(){
        assert.isOk(notfService.AnswerListener.calledOnce)
        done()
      },function(err){throw err})
    })


    describe('UserListener', function(){
      var userName  = Utility.genUID('u')
      beforeEach(function(){
        sinon.spy(notfService, "pushNotification")
      })

      afterEach(function(){

        notfService.pushNotification.restore()
      })

      it("UserListener should not be called other than rating change", function(done){
        let user = {'userName' : userName}
        user = new User(user)
        var promise = co(function*(){
          try{
          yield User.save(user)
          user = yield User.get(userName).run()
          yield user.merge({topics:["sankar1"]}).save()
        }catch(err){done(err)}
        })
        promise.then(function(){
          assert.isNotOk(notfService.pushNotification.called)
            done()


        },function(err){ done(err)})
      })

      it("should be called on rating change", function(done){
        var promise  =  co(function*(){
          try{
              let user = yield User.get(userName).run()
              yield user.merge({rating:12}).save()
          }
          catch(err){throw err}
        })
        promise.then(function(){
          assert.isOk(notfService.pushNotification.calledOnce)
          done()
        },function(err){done(err)})
      })


    })

})
