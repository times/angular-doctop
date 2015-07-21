/**
 * @ngdoc service
 * @name times.doctop.Doctop
 * @description Provider allowing easy config and return of Doctop data in Angular.
 */
'use strict';

angular.module('times.doctop', [])
  .provider('Doctop', function () {
    var doctopResponse;

    var doctopOptions = {
      callback: function(data, Doctop) {
        doctopResponse.resolve([data, Doctop]);
      }
    };

    // Public API for configuration
    this.setDoctopOptions = function (opts) {
      doctopOptions = angular.extend(doctopOptions, opts);
    };

    // Method for instantiating
    this.$get = function ($q, $window) {
      doctopResponse = $q.defer();
      $window.$.doctop(doctopOptions);

      return doctopResponse.promise;
    };
  });
