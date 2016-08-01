angular = require('angular')

angular.module('qaPlugin').component("loadTopics",{
  templateUrl   : 'http://localhost:8001/Templates/questions.html',
  controller    : "QuestionController",
  controllerAs  : 'qController',
  link          : function(scope, element, attrs) {
    scope.topics  = JSON.parse(attrs.topics)
  }
})
