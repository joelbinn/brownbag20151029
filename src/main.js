import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import './brownbag.sass!';
import angular from 'angular';
import {chucknorris} from './chucknorris/module';

const mainModule = angular.module('main',[chucknorris.name]);
// Use manual boostrapping of angular since something went fishy
// with order of loading.
angular.bootstrap(document, [mainModule.name]);

const fn = ()=>'Yowza brownbaggins!'
console.debug(fn());
