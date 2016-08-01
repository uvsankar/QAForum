const assert    = require('chai').assert
const Utility   = require('../Services/Utility')


describe('Utility tests', function(){
  it('id should have prefix attached', function(){
    let id = Utility.genUID("a")
    assert(id[0]=='a', 'prefix is different')
  })

  it('id size ',function(){
    let id = Utility.genUID("a")
    console.log(id + " " + id.s)
    assert(id.length==6,'id size is not according to specified standards')
  })
})
