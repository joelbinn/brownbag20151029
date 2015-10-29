import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import './brownbag.sass!';
import angular from 'angular';
import {appModule} from './app/module';

const mainModule = angular.module('main',[appModule.name]);
// Use manual boostrapping of angular since something went fishy
// with order of loading.
angular.bootstrap(document, [mainModule.name]);

const fn = ()=>'Yowza brownbaggins!'
console.debug(fn());
