const DbSchema      =  require('../Schemas/DbSchema')
const co            = require('co')

class NotfDriver{

  constructor(){
    this.Notification    = DbSchema.Notification
    this.r              = DbSchema.r
  }

  saveNotf(notf){
    const me    = this
    return co(function*(){
      try{
        notf = new me.Notification(notf)
        yield me.Notification.save(notf)
        return "Added Notificaton"
      }
      catch(err){throw err}
    })
  }

// type - nId / UserName
  getNotf(type,id){
    const me = this
    return co(function*(){
      try{
        if(type == "nId")
         return yield me.Notification.get(id)
        else {
          var notf = yield me.r.table("Notifications").filter({userName :id,read:false}).run()
          yield me.r.table("Notifications").filter({userName : id}).update({read : true}).run()
          return notf
        }
      }
      catch(err){throw err}
    })
  }

}

module.exports = NotfDriver
