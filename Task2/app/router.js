import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speaker', { path: '/speakers' });
  this.route('speaker-detail', { path: "/speakers/:id" });
  this.route('speaker-create');
  this.route('speaker-edit', { path: "/speaker-edit/:id" });
  this.route('error', { path: '/:error' });
  this.route('not-found', { path: '*path' });
  this.route('book', { path: '/books' });
  this.route('book-detail', { path: "/books/:id" });
  this.route('book-edit', { path: "/book-edit/:id" });
  this.route('book-create');
  this.route('meeting', { path: '/meetings' });
  this.route('meeting-create', );
  this.route('meeting-edit', { path: "/meeting-edit/:id" });
  this.route('report-create', { path: "/report-create/:id"});
  this.route('report-edit', { path: "/report-edit/:id" });
  this.route('report-detail', { path: "/reports/:id" });
  this.route('login', { path: "/login"});
  this.route('register', { path: '/register'})
});

export default Router;
