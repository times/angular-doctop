# angular-doctop
### An AngularJS provider allowing easy use of Doctop via promises
### [Elliot Davies (@elimoto)](http://www.twitter.com/elimoto), MIT licensed
### Based on doctop and angular-tabletop by [Ændrew Rininsland (@aendrew)](http://www.twitter.com/aendrew)

## Installation

1. `bower install angular-doctop --save`
1. Add 'Doctop' to your module dependencies:
  ```javascript
  angular
    .module('myApp', [
      'times.doctop'
    ])
  ```
1. Configure at runtime:
  ```javascript
  ...
  .config(function(DoctopProvider) {
    DoctopProvider.setDoctopOptions({
        url: '', // Your url here
      });
  });
  ```
1. This will return a promise, which you can resolve at will in your controller.

Be sure to include both the angular-doctop and doctop scripts in your app's main HTML file.

### Changelog

  * 0.3.3 - Bugfixes
  * 0.3 - Initial fork of angular-tabletop
