angular = require('angular')

angular.module('qaPlugin').component("loadTopics",{
  templateUrl   : '../Templates/questions.html',
  controller    : "QuestionController",
  controllerAs  : 'qController',
  link          : function(scope, element, attrs) {
    scope.topics  = JSON.parse(attrs.topics)
  }
})
