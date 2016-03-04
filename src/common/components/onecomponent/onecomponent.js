import angular from 'angular';
import onecomponentTemplate from './onecomponent.template';
import './onecomponent.css!';

class OnecomponentDirective {

    constructor() {
        this.templateUrl = onecomponentTemplate.name,
        this.restrict = 'AE';
        this.scope = {};
    }

    link(scope, element, attributes) {
        console.log("directive link");
    }

    static directiveFactory(){
        OnecomponentDirective.instance = new OnecomponentDirective();
        return OnecomponentDirective.instance;
    }
}

let onecomponentModule = angular.module('common.components.onecomponent', [
  onecomponentTemplate.name
]);

onecomponentModule.directive('onecomponent', OnecomponentDirective.directiveFactory);

export default onecomponentModule;
