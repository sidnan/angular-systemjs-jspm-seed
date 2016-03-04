import angular from 'angular';


import 'angular-ui-grid';
import 'angular-touch';
import 'angular-animate';
import 'assets/styles/ui-grid.css!';


import { View2Controller } from './view2.controller';
import view2Template from './view2.template';
import stackedbarModule from 'common/components/stackedbar/stackedbar';
import './view2.css!';

function ConfigureModule($stateProvider){
  $stateProvider.state('view2', {
    url: '/view2',
    templateUrl: view2Template.name,
    controller: View2Controller,
    controllerAs: 'view2Ctrl'
  });
}

export default angular
  .module('view2', [
    'ngAnimate','ngTouch', 'ui.grid','ui.grid.exporter', 'ui.grid.selection',
    view2Template.name,
    stackedbarModule.name
  ])
  .config(ConfigureModule);
