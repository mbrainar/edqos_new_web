import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('apps');
  this.route('policytags');
  this.route('about');
  this.route('contact');
});

export default Router;
