const assert    = require('chai').assert
const Utility   = require('../src/Services/Utility')
const DbSchema  = require('../src/Schemas/DbSchema')
const sinon     = require('sinon')

describe('Utility tests', function(){
  it('id should have prefix attached', function(){
    let id = Utility.genUID("a")
    assert(id[0]=='a', 'prefix is different')
  })

  it('UID size should be 6 ',function(){
    let id = Utility.genUID("a")
    assert(id.length==6,'id size is not according to specified standards')
  })

  it('arrayFilter should throw exception without context',function(){
    sinon.spy(Utility, "arrayFilter")
    try{
    Utility.arrayFilter()
  }catch(err){}
    assert.isOk(Utility.arrayFilter.threw())
  })
})
