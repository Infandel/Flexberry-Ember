import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('speaker', { path: '/speakers' }, function() {
    this.route('detail', { path: "/:id" });
  });
  this.route('speaker-create');
  this.route('speaker-edit', { path: "/speaker-edit/:id" });
  this.route('error', { path: '/:error' });
  this.route('not-found', { path: '*path' });
  this.route('book', { path: '/books' }, function() {
    this.route('detail', { path: "/:id" });
  });
  this.route('book-edit', { path: "/book-edit/:id" });
  this.route('book-create');
  this.route('meeting', { path: '/meetings' });
  this.route('meeting-create');
  this.route('meeting-edit', { path: "/meeting-edit/:id" });
  this.route('report', { path: "/reports"}, function() {
    this.route('detail', { path: "/:id"});
  });
  this.route('report-create');
  this.route('report-edit', { path: "/report-edit/:id" });
  this.route('search-book-by-tag', { path: "/search-book-by-tag" });
});

export default Router;
