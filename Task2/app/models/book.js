import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  title: DS.attr('string'),
  author: DS.attr('string'),
  pagesCount: DS.attr('number'),
  coverURL: DS.attr('string'),
  descriURL: DS.attr('string'),
  tags: DS.attr(),

  reports: DS.hasMany('report'),


  averageBookScore: computed('reports.@each.bookScore', function() {
    return this.get('reports').reduce(function(sum, score) {
      return sum += score.get('bookScore');
    }, 0) / this.get('reports').get('length');
  })
});
