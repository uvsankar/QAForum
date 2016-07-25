const QAService     = require('../Services/QAService')

class QAHandler{
  constructor(){
    this.qaService  = new QAService()
  }

  addQuestionHandler(request, reply){
    const me  = this
    me.qaService.addQuestion(request.payload).then((msg)=>{
      reply(msg).code(200)
    },(err)=>{
      reply(err).code(400)
    })
  }

  addAnswerHandler(request, reply){
    const me = this
    me.qaService.addAnswer(request.payload).then((msg)=>{
      reply(msg).code(200)
    },(err)=>{
      reply(err).code(400)
    })
  }

  qaUpdateHandler(request, reply){
    const me = this
    let qa        = request.payload["type"]
    let upvoterName = request.payload.upVoterName

    me.qaService.qaUpdate(qa,upvoterName, request.payload.data).then((msg)=>{
      reply(msg).code(200)
    },(err) =>{
      reply(err).code(400)
    })
  }

  //  Type of questions
  //  1. authorName - questions answered by the given person
  //  2. qId        - all the answers of the given question
  //  3. username   - questions in topics subscribed by the user
  //  4. topics     - questions in the given topics
  getQuestionsHandler(request, reply){
    const me = this
    var promise;
    if(request.payload && request.payload.authorName){
      promise = me.qaService.getAnswersOfUser(request.payload.authorName)
    }
    else if(request.params.qId){
      promise = me.qaService.getAllAnswers(request.params.qId)
    }
    else{
      promise = me.qaService.getQuestionsForUser(request.payload.userName,request.payload.topics)
    }
    promise.then(
      (msg)=>{reply(msg).code(200)},
      (err)=>{
        reply({err:err}).code(400)}
    )
  }

}

module.exports  = QAHandler
