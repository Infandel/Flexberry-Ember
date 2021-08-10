import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pagesCount: DS.attr('string'),
  coverURL: DS.attr('string'),
  descriURL: DS.attr('string'),
  tags: DS.attr('string'),

  reports: DS.hasMany('report')
});
