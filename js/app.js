var app = angular.module('mySite',['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './partials/home.html',
  })
  .when('/about', {
    templateUrl: './partials/about.html',
  })
  .when('/resume', {
    templateUrl: './partials/resume.html',
  })
  .when('/projects', {
    templateUrl: './partials/projects.html',
  })
  .when('/contact', {
    templateUrl: './partials/contact.html',
  })
});
