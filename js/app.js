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

console.log("I'm an extremely passionate and hard worker. I have been known to Rick Roll my coworkers and provide a copious amount of corny puns when the going gets tough. I write everything down in my notebook, so if you ever forget what you said, come find me as I most likely have what you need. I do things the right way, 100% of the time, even if it isn't the easiest way. I back up, check up and follow up to ensure careless mistakes are kept to an absolute minimum. Most of all, I love to learn. I'm looking for longevity with a company that will provide me mentorship and opportunities to continue learning new things.");
