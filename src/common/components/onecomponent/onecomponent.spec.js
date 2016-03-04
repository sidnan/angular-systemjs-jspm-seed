'use strict';

import angular from 'angular';
import 'angular-mocks';
import onecomponentModule from 'common/components/onecomponent/onecomponent';


beforeEach(angular.mock.module(onecomponentModule.name));

describe('component: onecomponent', function() {

  var compile, scope, directiveElem;

  beforeEach(function() {


        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<onecomponent></onecomponent>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should applied template', function () {
      expect(directiveElem.html()).not.toEqual('');
    });

    it('should have one <div> element', function () {
      expect(directiveElem.find('div').length).toEqual(1);
    });


});
