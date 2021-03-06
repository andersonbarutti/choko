'use strict';

/* Directives */

angular.module('choko.directives', [])
  .directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }])
  .directive('ckButton', function($http, $compile) {
    return {
      restrict: 'E',
      scope: true,
      compile: function(element, attrs) {
        return function(scope, element, attrs) {
          var template = scope.item.items ? '/templates/btn-group-dropdown.html' : '/templates/btn-group-button.html';
          scope.item.classes = scope.item.classes || ['btn-default'];

          $http({method: 'GET', url: template, cache: true}).then(function(result) {
            var template = angular.element($compile(result.data)(scope));
            element.replaceWith(template);
          });
        };
      }
    };
  });