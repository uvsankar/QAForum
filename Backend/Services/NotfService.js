const DbSchema        = require('../Schemas/DbSchema')
const NotfDriver      = require('../DbDrivers/NotfDriver')
const QADriver        = require('../DbDrivers/QADriver')
const UserDriver      = require('../DbDrivers/UserDriver')
const co              = require('co')
const Config          = require('../Config/config')
const r               = require('rethinkdb')
const Utility         = require('./Utility')
const _               = require('lodash')

class NotfService{

  constructor(){
    this.notfDriver = new NotfDriver()
    this.qaDriver   = new QADriver()
    this.userDriver = new UserDriver()
    this.r          = DbSchema.r
  }

  getNotf(userName){
    const me = this
    return co(function*(){
        var notf = yield me.notfDriver.getNotf('userName', userName)
        return notf
    })
  }

  UserListener(err,feed){
    const me = this
    //    console.log(cursor)
    var notification = {
      id  : feed['old_val']['userName'],
      msg : "Your new rating is : " + feed['new_val']['rating'],
      url : '#profile'
    }
    me.pushNotification(notification.id, 'RatingChange', notification) //returns a promise
  }

  AnswerListener(err, feed){
    const me            = this
    if(feed['old_val']!=null)
      return
    return co(function*(){
      try{
        var question  = yield me.qaDriver.getQA('q',feed['new_val']['qId'])
        var questionAuthor      = question["userName"]
        var notification    = {
          id  : feed['new_val']['qId'],
          msg : "A new answer to your Question:\n" + question['question'],
          url : "#question/" + feed['new_val']['qId'] + "/" + question['question'] + "_referer/" + feed['new_val']['aId']
        }
        yield me.pushNotification(questionAuthor, 'NewAnswer', notification)
    }
    catch(err){throw err}
    })
  }

  QuestionListener(err, feed){
    const me = this
    return co(function*(){
      if(feed['old_val']!=null)
        return
      var users =yield  me.userDriver.getUsers({topics:feed['new_val']['tags']},["userName"])
      _.forEach(users,(value)=>{
        var notf = {
          id : feed['new_val']['qId'],
          msg: "new Question :\n" + feed['new_val']['question'],
          url: '#question/'  + feed['new_val']['qId'] + "_/" + feed['new_val']['question']
        }
        me.pushNotification(value.userName, "NewQuestion", notf) // Using lodash no way to use the yield ... ???
      })

    })
  }

  pushNotification(userName, type, notf){
    const me  = this
    var notification = {
      nId               : Utility.genUID('n'),
      userName          : userName,
      notificationType  : type,
      time              : Date(),
      notification      : notf
    }
    return me.notfDriver.saveNotf(notification) //returns Promise
  }

  subscribeToDb(){

    const me = this
    me.r.table("UserDetails").changes().filter(
        me.r.row('new_val')('rating').ne(me.r.row('old_val')('rating'))
      ).run(function(err, Cursor){
         if(err)
          throw err
        Cursor.each(me.UserListener.bind(me))
       })

    me.r.table('Questions').changes().run(function(err,Cursor){
      if(err) throw err;
      Cursor.each(me.QuestionListener.bind(me))
    })

    me.r.table('Answers').changes().run(function(err, Cursor){
      if(err) throw err;
      Cursor.each(me.AnswerListener.bind(me))
    })


  }
}

module.exports = NotfService
