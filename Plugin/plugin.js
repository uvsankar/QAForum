var qaPlug = angular.module("qaPlug",["ngSanitize"])

qaPlug.component("qaPlugin",{
  templateUrl   : './templates/questions.html',
  controller    : "QuestionController",
  controllerAs  : 'qController'
})

qaPlug.controller("QuestionController", function($http){
    var self = this
    self.qa  = {}
    $http({
      method  : 'POST',
      url     : "http://localhost:8000/questions/",
      data    : {
        "topics"  : ["graph", "combinatorics"]
      }
    }).then((msg)=>{
      self.qa = msg.data
      console.log("QA")
    },(err)=>{
      throw err
    })

})
