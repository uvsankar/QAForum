const co                  = require('co')
const sinon               = require('sinon')
const QAService           = require('../src/Services/QAService')
const UserService         = require('../src/Services/UserService')
const DbSchema            = require('../src/Schemas/DbSchema')
const Utility             = require('../src/Services/Utility')

var chai                  = require('chai')
const chaiAsPromised      = require("chai-as-promised");
chai.use(chaiAsPromised);
const assert              = require('chai').assert

describe("QAServices", function(){
    let qaService       = new QAService()
    let userService     = new UserService()
    let Question        = DbSchema.Question
    let userName        = Utility.genUID('t')
    let qId             = Utility.genUID('t')
    let aId             = Utility.genUID('t')

    before(function(done){
      let promise       = co(function*(){
        yield userService.addNewUser({ userName, password:"test123"   })
        let ques = new Question({"qId" : qId, "question" : "blah", userName})
        yield Question.save(ques)
      })
      promise.then(function(){done()},function(err){done(err)})
    })

    after(function(done){
      DbSchema.r.table("UserDetails").delete().run()
      DbSchema.r.table("Questions").delete().run()
      DbSchema.r.table("Answers").delete().run()
      var promise = DbSchema.r.table("Notifications").delete().run()
      promise.then(()=>{done()},(err)=>{done(err)})
    })

    it('addQuestion should throw error on illegal userName', function(){
      return assert.isRejected(qaService.addQuestion({question:"blah..",userName:"blah"}))
    })

    it('addQuestion should return qId', function(done){
      let promise = co(function*(){
        let q = qaService.addQuestion({userName,"question":"blah"})
        return q
      })
      assert.eventually.property(promise,'qId').notify(done)
    })

    it('getQuestionsAnsweredBy', function(){
      return assert.eventually.isArray(qaService.getAnswersOfUser("__balh__"))
    })

    it('addAnswer should return aId', function(done){
      let promise = qaService.addAnswer({userName,"answer":"blah",qId})

      assert.eventually.property(promise,'aId').notify(done)
    })

    it('isQuestion', function(done){
      let promise = Promise.all([
        assert.eventually.deepEqual(qaService.isQuestion(qId),{isValid:true,isOpen:true}),
        assert.eventually.deepEqual(qaService.isQuestion("__adf"),{isValid:false,isOpen:false})
      ])
      assert.isFulfilled(promise).notify(done)
    })

    it('addAnswer should throw error on illegal user/qId', function(){
      return assert.isRejected(qaService.addAnswer({'answer':"blah"}))
    })

    it('search functions should return array', function(){
      let promise = Promise.all([
        assert.eventually.isArray(qaService.getRelatedQuestions('blah')),
        assert.eventually.isArray(qaService.getQuestionsForUser(null)),
        assert.eventually.isArray(qaService.getQuestionsForUser()),
        assert.eventually.isArray(qaService.getQuestionsForUser(userName))
      ])
    })

    it('qaUpdate popularity change', function(done){
      var promise = co(function*(){
        yield qaService.qaUpdate('q',userName,{'qId':qId,'qPopularity' : 20})
        let q = yield Question.get(qId).run()
        return q.qPopularity
      })
      assert.eventually.equal(promise,20).notify(done)
    })
})
