import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes';
import HomeController from './home.controller';
import './home.css';
import './home.html';
import randomNames from '../../services/randomNames.services';
import greeting    from '../../directives/greeting.directive';

export default angular.module('app.home', [require('angular-ui-router'), randomNames, greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;