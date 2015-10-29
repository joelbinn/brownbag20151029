import angular from 'angular';
import {
  chucknorris
}
from '../chucknorris/module';
import htmlTemplate from './appView.html!text'

const appModule = angular.module('app', [chucknorris.name]);
appModule.directive('app', function() {
  return {
    restrict: 'E',
    scope: {},
    template: htmlTemplate
  }
});

console.debug('Loaded app module');

export {
  appModule
};
