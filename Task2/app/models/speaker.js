import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  surname: DS.attr('string'),
  patronymic: DS.attr('string'),
  
  reports: DS.hasMany('report'),
  user: DS.belongsTo('user'),

  fullName: computed('name', 'surname', 'patronymic', function() {
    return `${this.get('name')} ${this.get('surname')} ${this.get('patronymic')}`;
  }),
});
