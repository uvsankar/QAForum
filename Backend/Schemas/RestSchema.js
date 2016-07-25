const Joi     = require('joi')

const authSchema    = Joi.object().keys({
  userName      : Joi.string().required(),
  password      : Joi.string().required()
})

const userSchema    = Joi.object().keys({
  userName      : Joi.string().required(),
  following     : Joi.array().optional(),
  followers     : Joi.array().optional(),
  topics        : Joi.array().optional(),
  rating        : Joi.number().optional()
})

const add_user      = userSchema.keys({
  password      : Joi.string().required()
})

const questions     = Joi.object().keys({
  userName      : Joi.string().required(),
  question      : Joi.string().required(),
  qPopularity   : Joi.number().optional(),
  tags          : Joi.array().required()
})

const answers       = Joi.object().keys({
  userName      : Joi.string().required(),
  qId           : Joi.string().required(),
  answer        : Joi.string().required()
})

const qa_update     = Joi.object().keys({
  upvoterName   : Joi.string().required(),
  type          : Joi.string().length(1).required(), // Either 'q' or 'a'
  data          : Joi.object().keys({
    open          : Joi.boolean().optional(),
    qPopularity   : Joi.number().optional(),
    aPopularity   : Joi.number().optional(),
    qId           : Joi.string().optional(),
    aId           : Joi.string().optional()
  })
})

module.exports ={
  authSchema,
  userSchema,
  add_user,
  userSchema,
  questions,
  answers,
  qa_update
}
