import DS from 'ember-data';

export default DS.Model.extend({
  reportDate: DS.attr('string'),
  bookScore: DS.attr('number'),
  presentationURL: DS.attr('string'),
  videoURL: DS.attr('string'),
  review: DS.attr('string'),

  speaker: DS.belongsTo('speaker'),
  book: DS.belongsTo('book'),
  meeting: DS.belongsTo('meeting'),
  user: DS.belongsTo('user')
});
