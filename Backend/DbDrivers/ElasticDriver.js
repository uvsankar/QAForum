const elasticsearch   = require('elasticsearch')
const co              = require('co')
const Config          = require('../Config/config.json')

class ElasticDriver{

  constructor(index, type){
    this.index    = index
    this.type     = type
    this.client   = new elasticsearch.Client({
  		"host"  : "localhost:9200",
  		"log"		: "trace"
  	})
  }

  insert(id,body){
    const me  = this
    let obj   = {
      index       : me.index,
      type        : me.type,
      id          : id,
      body        : body
    }
    return co(function*(){
      try{
        var resp = yield me.client.create(obj)
        return resp
      }
      catch(err){throw err}
    })
  }

  searchQuestions(searchTerm){
    const me = this
    let obj  = {
      index     : me.index,
      type      : me.type,
      body      : {
        query       : {
          match   : {
            "question"  : searchTerm
          }
        }
      }
    }
    return co(function*(){
      try{
        var resp      = yield me.client.search(obj)
        var Questions = []
        for(var i=0; i<resp.hits.hits.length;i++)
          Questions.push(resp.hits.hits[i]["_source"])
        return Questions
      }
      catch(err){throw err}
    })
  }
  
}


module.exports    = ElasticDriver
