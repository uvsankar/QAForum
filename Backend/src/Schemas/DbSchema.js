var  Config = null
if(process.env.NODE_ENV=='test')
   Config       = require('../Test/Config/config.json')
else
   Config       = require('../Config/config.json')
const thinky    = require('thinky')(Config.rdb)
const type      = thinky.type

const Auth      = thinky.createModel("Auth",{
  userName    : type.string().min(3).max(10),
  password    : type.string().min(3).max(10)
})

const User      = thinky.createModel("UserDetails",{
  userName    : type.string().min(3).max(10),
  topics      : type.array().optional().default([]),
  followers   : type.array().optional().default([]),
  following   : type.array().optional().default([]),
  rating      : type.number().default(0)
},{
  pk  : 'userName'
})

const Question  = thinky.createModel("Questions",{
  qId           : type.string(),
  userName      : type.string().min(3).max(10),
  question      : type.string(),
  qPopularity   : type.number().default(0),
  tags          : type.array(),
  open          : type.boolean().default(true)
},{
  pk  : 'qId'
})

const Answer    = thinky.createModel("Answers",{
  aId           : type.string(),
  userName      : type.string().min(3).max(10),
  aPopularity   : type.number().default(0),
  qId           : type.string()
},{
  pk  : 'aId'
})

const Notification = thinky.createModel("Notifications",{
  nId           : type.string(),
  userName      : type.string(),
  notificationType : type.string(),
  time          : type.string(),
  read          : type.boolean().default(false),
  notification  : {
    id      : type.string(),
    msg     : type.string()
  }
},{
  pk  : 'nId'
})

module.exports = {
  Auth,
  User,
  Question,
  Answer,
  Notification,
  r: thinky.r,
  Query :thinky.Query
}
