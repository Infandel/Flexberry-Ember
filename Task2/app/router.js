import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {  
  this.route('speaker', { path: '/speakers' }, function() {
    this.route('detail', { path: "/:id" });
    this.route('create');
    this.route('edit', { path: "/:id/edit" });
  });
  this.route('error', { path: '/:error' });
  this.route('not-found', { path: '*path' });
});

export default Router;
