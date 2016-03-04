'use strict';

import angular from 'angular';
import 'angular-mocks';
import stackedbarModule from 'common/components/stackedbar/stackedbar';

beforeEach(angular.mock.module(stackedbarModule.name));

describe('component: stackedbar', function() {

    var compile, scope, directiveElem;

    beforeEach(function() {
        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
            scope.myDataSet = [{
              data: [{
                mno: 'Team A',
                value: 50
              }],
              name: 'Wins'
            }, {
              data: [{
                mno: 'Team A',
                value: 50
              }],
              name: 'Losses'
            }];
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<stacked-bar my-data-set="myDataSet"></stacked-bar>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should applied template', function () {
      expect(directiveElem.html()).not.toEqual('');
    });

    it('should have one <svg> element', function () {
      expect(directiveElem.find('svg').length).toEqual(1);
    });

    it('isolated scope should have the "my-data-set" properties assigned', function () {
        var isolatedScope = directiveElem.isolateScope();

        expect(isolatedScope.myDataSet).toBeDefined();
    });

    it('myDataSet on isolated scope should be two-way bound', function(){
        var isolatedScope = directiveElem.isolateScope();

        isolatedScope.myDataSet.prop = "some value";

        expect(scope.myDataSet.prop).toEqual('some value');
    });


});
