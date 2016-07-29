var QA = angular.module('QA',['ngRoute', 'angularModalService', 'ngCookies', 'ngSanitize'])

QA.factory('getUserDet', ($http)=>{
  return (userName)=>{
    var promise = $http({
      method  : 'GET',
      url     : "http://localhost:8000/user/" + userName +"/"
    })
    return promise
  }
})

QA.factory('getNotf', ($rootScope, $http)=>{
  return () =>{
    var promise = $http({
      method    : 'GET',
      url       : "http://localhost:8000/user/" + $rootScope.userName + "/notf/"
    })
    return promise
  }
})

QA.factory('getList', ($http)=>{
  var promise = $http({
    method    : 'GET',
    url       : "http://localhost:8000/user/list/"
  })
  return promise
})

QA.factory('strip', ()=>{
  return (array)=>{
    for(var i=0;i<array.length; i++)
      array[i] = array[i].trim()

    return array
  }
})

QA.filter('newUsers', function($rootScope){
  return function(users){
    var filtered = []
    var following = $rootScope.userDetails.following
    for(var i=0; i<users.length; i++){
      if(following.indexOf(users[i])== -1)
        filtered.push(users[i])
    }
    return filtered
  }
})

QA.run(function($rootScope, $cookies, getUserDet, getList){
  console.log($cookies.getAll())
  $rootScope.userName     = $cookies.get('username') || "__anonymous__"
  $rootScope.userDetails  = {}
  $rootScope.list         = {}
  getList.then((msg) =>{
    $rootScope.list = msg.data
  })

  $rootScope.$watch('userName',(newUser, oldUser)=>{
    // console.log("new user " + newUser )
    $rootScope.$broadcast("new User")

    getUserDet(newUser).then((msg)=>{
    //  console.log(msg.data)
      $rootScope.userDetails = msg.data
    })
  })

})

QA.config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider){
  $httpProvider.defaults.withCredentials = true

  $routeProvider.when('/login',{
    templateUrl   : './templates/login.html',
    controller    : 'LoginController',
    controllerAs  : 'login'
  })

  $routeProvider.when('/register/',{
    templateUrl   : './templates/registration.html',
    controller    : 'RegController',
    controllerAs  : 'reg'
  })

  $routeProvider.when('/',{
    templateUrl      : './templates/questions.html',
    controller    : 'QuestionsController',
    controllerAs  : 'qController'
  })

  $routeProvider.when('/user/:authorName',{
    templateUrl   : './templates/questions.html',
    controller    : 'QuestionsController',
    controllerAs  : 'qController'
  })

  $routeProvider.when('/topic/:topic', {
    templateUrl   : './templates/questions.html',
    controller    : 'QuestionsController',
    controllerAs  : 'qController'
  })

  $routeProvider.when('/question/:qId/:question/:aId?',{
    templateUrl   : './templates/questions.html',
    controller    : 'QuestionsController',
    controllerAs  : 'qController'
  })

  $routeProvider.when('/profile',{
    templateUrl   : './templates/dashBoard.html',
    controller    : 'DashController',
    controllerAs  : 'dash'
  })

  $routeProvider.otherwise({
    redirectTo : '/'
  })

}])


QA.controller('LoginController',function($scope, $rootScope, $location, $http, getUserDet){
  var self = this
  self.errMsg          = {}
  self.authenticate = function(){
    $http({
      method : 'POST',
      url    : 'http://localhost:8000/login/',
      data   : {
        userName :this.userName,
        password :this.password
      }
    }).then((msg)=>{
        $rootScope.userName = self.userName
        console.log(msg)
        $location.path('/')
      },(err)=>{
        self.errMsg= err.data
        console.log(err)})
  }
})

QA.controller('RegController',function($scope, $rootScope, $http, $location){
  var self = this
  self.errMsg={}
  self.register = function(){

      var follow = []
      if(self.form.following)
        follow  = self.form.following.split(',')
      $http({
        method  : 'POST',
        url     : 'http://localhost:8000/user/',
        data    : {
          userName : self.form.userName,
          password : self.form.password,
          topics   : self.form.topics.split(','),
          following: follow
        }
      }).then((msg)=>{
        console.log(msg)
        $location.path('login/')
      },(err)=>{
        self.errMsg = err.data
        console.log(err)
      })
  }
})

QA.controller('QuestionsController', function($scope, $rootScope, $http, $location, ModalService, $routeParams){
  var self = this
  self.qa               = []
  self.refAID           = $routeParams.aId || undefined
  self.onCloseQuestion  = (qId, key)=>{

    $http({
      method    : 'PUT',
      url       : 'http://localhost:8000/qa/',
      data      : {
        upvoterName : $rootScope.userName,
        type        : "q",
        data        : {
          qId     : qId,
          open    : !self.qa[key].Question.open
        }
      }
    }).then((data)=>{
      self.qa[key].Question.open = !self.qa[key].Question.open
    },(err) => {console.log(err.data)})
    console.log(qId)
  }
  self.onUpVote         = (qId, key,type) =>{
    var data      = {
      upvoterName   : $rootScope.userName,
      type          : type,
      data          : {
        qId : qId,
        qPopularity : 1
      }
    }
    var idata;
    if(type =='a'){
      idata = {
        aId : qId,
        aPopularity : 1
      }
      data.data = idata
    }
    $http({
      method  : 'PUT',
      url     : 'http://localhost:8000/qa/',
      data    : data
    }).then((msg)=>{
      if(type =='q')
        self.qa[key].Question.qPopularity += 1
      else {
        self.qa[key.q].Answers[key.a].aPopularity +=1
      }
      console.log(msg)},
    (err)=>{console.log(err.data)})
  }
  self.onAnswer         = (qId, key)=>{
    ModalService.showModal({
      templateUrl : './templates/answer.html',
      controller  : 'AnswerController',
      controllerAs: 'answer',
      inputs      : {
        data  : {
          Question : self.qa[key].Question.question,
          qId      : qId
        }
      }
    }).then(function(modal){
      modal.element.modal()
      modal.close.then(function(result){
        if(result == -1)
        {
            $location.path('/login/')
        }
        else{
        $location.path('/question/' + qId + '/' +  self.qa[key].Question.question + '_referer/' + result  )
      }
        console.log(result)
      })
    })
  }

  var userName = ($rootScope.userName=='__anonymous__') ? undefined : $rootScope.userName
  var url      = $location.$$path
  var data     = {}
  if(url.search('user')!= -1){
      data['authorName'] = $routeParams.authorName
  }
  else if(url.search('question')!= -1){
      data['qId']   = $routeParams.qId
  }
  else if(url.search('topic')!=-1){
    data['topics'] = [$routeParams.topic]
  }
  else{
    data['userName'] = userName
  }

  $http({
    method  : 'POST',
    url     : 'http://localhost:8000/questions/',
    data    : data
  }).then((msg)=>{
    self.qa = msg.data
    console.log(msg)
  },(err) =>{
    console.log(err)
  })
})

QA.controller('ErrorController', function($scope, close, err){
  $scope.input = err
})

QA.controller('SideNavController', function($scope, $rootScope, ModalService){
  var self = this
  self.onAsk = function(){
    ModalService.showModal({
      templateUrl : './templates/ask.html',
      controller  : 'AskController',
      controllerAs: 'ask'
    }).then(function(modal){
      modal.element.modal()
      modal.close.then(function(result){
        console.log(result)
      })
    })
  }
})

QA.controller('AskController',function($scope, $rootScope, $http, $element, close, $location){
  var self    = this;
  self.errMsg = {}

  self.onAsk = () =>{
    var data = {
      userName    : $rootScope.userName,
      question    : self.form.question,
      tags        : self.form.tags.split(',')
    }
    $http({
      method    : 'POST',
      url       : 'http://localhost:8000/question/',
      data      : data
    }).then((data)=>{
      $element.modal("hide")
      close("success",500)
    }, (err)=>{
      $location.path('/login/')
      self.errMsg = err.data
    })
  }
})

QA.controller('AnswerController', function($scope, $rootScope, $http, $element, close, data, $location){
  var self        = this
  self.Question   = data.Question
  self.qId        = data.qId
  self.errMsg     = {}
  self.onAnswer   = function(){
    $http({
      method      : 'POST',
      url         : "http://localhost:8000/question/" + self.qId + "/answer/",
      data        : {
        userName    : $rootScope.userName,
        qId         : self.qId,
        answer      : self.form.answer
      }
    }).then((msg)=>{
        self.errMsg = msg;
        close(msg.data.aId, 500)
        $element.modal('hide')
    },(err)=>{
      close(-1,500)
      $element.modal('hide')
    })
  }
})

QA.controller('UserController', function($scope, $cookies, $rootScope, $location, $interval, $route) {
  var self = this
  self.onLogout = ()=>{
    $cookies.remove('sid')
    $cookies.remove('username')
    $rootScope.userName = "__anonymous__"
    $location.path('/')
    $route.reload()
  }

  $interval(()=>{
    if($cookies.get('sid')!=undefined || $rootScope.userName == '__anonymous__')
      return
    self.onLogout()
  },15000)
})

QA.controller('NotfController', function($scope, $http, getNotf, $location, $interval, $rootScope){
  var self = this;
  self.notfs  = []
  self.anyNew = false

  self.onClick = () =>{
    self.anyNew = false
  }

  $scope.$on('new User', ()=>{
    self.notfs = []
  })

  $interval(()=>{
      if($rootScope.userName == '__anonymous__')
        return
      getNotf().then((msg)=>{
        if(msg.data.length!=0)
          self.anyNew = true
        self.notfs = msg.data.concat(self.notfs)
      },(err)=>{
        self.notf = []
      })
  },10000)
})

QA.controller('DashController', function($scope, $http, $rootScope, $location, strip){
  if($rootScope.userName == '__anonymous__')
    $location.path('/login')

  var self        = this
  self.topics    = ""
  self.following = ""
  self.onSave    = () =>{
    // Dont add empty topics and followers ... :P

    data = {userName : $rootScope.userName}
//  Messed up code STARTS ....
    if(self.following && typeof(self.following)=="string" )
      data["following"] = strip(self.following.split(','))
    else if(self.following!="") {
        data["following"] = strip(self.following)
    }
    if(self.topics && typeof(self.topics)=="string")
      data["topics"]  = strip(self.topics.split(','))
    else if(self.topics!=""){
      data["topics"] = strip(self.topics)
    }
// Messed up code ENDS....

    $http({
      method    : 'PUT',
      url       : 'http://localhost:8000/user/',
      data      : data
    }).then((msg)=>{
      $location.path('/')
    },(err)=>{console.log(err.data)})

  }
  $scope.$watch(()=>{return self.curUser},(newval,oldval) =>{
    if(self.following && newval)
      self.following += ',' + newval
    else if(newval){
      self.following = newval
    }
  })

  $scope.$watch(()=>{return self.curTopic},(newval, oldval) =>{
    if(self.topics && newval)
      self.topics += ',' + newval
    else if(newval){
      self.topics = newval
    }
  })
})
