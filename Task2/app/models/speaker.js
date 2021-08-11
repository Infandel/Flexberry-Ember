import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  patronymic: DS.attr('string'),
  
  reports: DS.hasMany('report')
});