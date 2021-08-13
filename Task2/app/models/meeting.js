import DS from 'ember-data';

export default DS.Model.extend({
  meetingDate: DS.attr('date-string'),

  reports: DS.hasMany('report')
});