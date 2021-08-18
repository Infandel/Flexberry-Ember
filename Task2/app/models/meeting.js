import DS from 'ember-data';

export default DS.Model.extend({
  meetingDate: DS.attr('string'),

  reports: DS.hasMany('report'),
  user: DS.belongsTo('user')
});
