import 'babel/external-helpers';
import angular from 'angular';
import 'angular-ui-router';
import 'ocLazyLoad';

import routing from 'common/utils/routing';

import jquery from 'jquery';

import 'assets/styles/app.css!';

let app = angular.module('demo', ['ui.router', 'oc.lazyLoad']);

app.config(routing(app));

app.config(['$urlRouterProvider', '$locationProvider', '$compileProvider', '$logProvider', '$httpProvider', '$ocLazyLoadProvider', function ($urlRouterProvider, $locationProvider, $compileProvider, $logProvider, $httpProvider, $ocLazyLoadProvider) {
  $locationProvider.html5Mode(true);
  $httpProvider.useApplyAsync(true);
  $urlRouterProvider.otherwise('/view1');

  if(window.prod){
    $logProvider.debugEnabled(false);
    $compileProvider.debugInfoEnabled(false);
  }

  $ocLazyLoadProvider.config({
    debug: true
  });
}]);

angular.element(document).ready(function() {
  angular.bootstrap(document.body, [ app.name ], {
    strictDi: true
  });
});

jquery(document).on('click', '.navbar-nav li', function() {
       jquery(".navbar-nav li").removeClass("active");
       jquery(this).addClass("active");
   });

export default app;
