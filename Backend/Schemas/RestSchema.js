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


module.exports ={
  authSchema,
  userSchema,
  add_user,
  userSchema
}
