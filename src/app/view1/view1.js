import angular from 'angular';

import { View1Controller } from './view1.controller';
import view1Template from './view1.template';
import './view1.css!';

import onecomponentModule from 'common/components/onecomponent/onecomponent';

function ConfigureModule($stateProvider){
  $stateProvider.state('view1', {
    url: '/view1',
    templateUrl: view1Template.name,
    controller: View1Controller,
    controllerAs: 'view1Ctrl'
  });
}

export default angular
  .module('view1', [
    view1Template.name,
    onecomponentModule.name
  ])
  .config(ConfigureModule);
