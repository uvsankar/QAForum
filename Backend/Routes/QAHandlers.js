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

}

module.exports  = QAHandler
