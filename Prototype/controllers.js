angular = require('angular')

angular.module('qaPlugin').controller("QuestionController", function($http, $scope, $attrs){
    var self = this
    self.qa  = {}
    $http({
      method  : 'POST',
      url     : "http://localhost:8000/questions/",
      data    : {
        "topics"  : $attrs.topics.split(',')
      }
    }).then((msg)=>{
      self.qa = msg.data
      console.log("QA")
    },(err)=>{
      throw err
    })

})
