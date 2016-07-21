const Config    = require('../Config/config.json')
const thinky    = require('thinky')(Config.rdb)
const type      = thinky.type

const Auth      = thinky.createModel("Auth",{
  userName    : type.string().min(3).max(10),
  password    : type.string().min(3).max(8)
})

const User      = thinky.createModel("UserDetails",{
  userName    : type.string().min(3).max(10),
  topics      : type.array().optional().default([]),
  followers   : type.array().optional().default([]),
  following   : type.array().optional().default([]),
  rating      : type.number().default(0)
})

const Question  = thinky.createModel("Questions",{
  qId           : type.string(),
  userName      : type.string().min(3).max(10),
  question      : type.string(),
  qPopularity   : type.number().default(0),
  tags          : type.array(),
  open          : type.boolean().default(true)
})

const Answer    = thinky.createModel("Answers",{
  aId           : type.string(),
  userName      : type.string().min(3).max(10),
  aPopularity   : type.number().default(0),
  qId           : type.string()
})

module.exports = {
  Auth,
  User,
  Question,
  Answer
}
