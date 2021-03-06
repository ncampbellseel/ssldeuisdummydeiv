/*jshint latedef:false*/

//Directive - msTag

(function() {
    'use strict';

    angular
        .module('xyzApp')
        .directive('msTag', msTag);

    msTag.$inject = [];

    function msTag() {

        return {
            restrict: 'E',
            templateUrl: 'core/elements/tag.template.html',
            scope: {
                name: '@',
                tip: '@',
                active: '=',
                juvenile: '=?'
            },
            controller: function($scope, $filter, $timeout) {
                var addJuv = '';

                if ($scope.juvenile) {
                    addJuv = ' - ' + $filter('translate')('app.global.juvenile');
                }

                if (!$scope.tip) {
                    $scope.theTip = 'NA' + addJuv;
                } else {
                    $scope.theTip = $scope.tip + addJuv;
                }
            }
        };
    }

})();
