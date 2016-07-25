// https://serratus.github.io/quaggaJS/examples/live_w_locator.html

require('./reset.less');

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import barcodeListener from 'angular-barcode-listener';
import MainCtrl from './main.ctrl.es6.js';

import appConfig from './config.es6.js';

angular.module('app', [uiRouter, 'barcodeListener'])
  .controller('MainCtrl', MainCtrl)
  .config(appConfig);
