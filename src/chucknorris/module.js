import angular from 'angular';
import './style.css!';
import {ChuckNorris} from './ChuckNorris';

const chucknorris = angular.module('chucknorris',[])
chucknorris.directive(ChuckNorris.id(), ChuckNorris.factory);

console.debug('Loaded chucknorris module');

export {chucknorris};
