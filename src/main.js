import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import './brownbag.sass!';
import angular from 'angular';
import {chucknorris} from './chucknorris/module';

const mainModule = angular.module('main',[chucknorris.name]);

const fn = ()=>'Yowza brownbaggins!'
console.debug(fn());
