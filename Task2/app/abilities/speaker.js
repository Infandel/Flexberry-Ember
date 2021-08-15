import { computed } from '@ember/object';
import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';


export default Ability.extend({
  currentUser: service(),
  session: service(),

  //only the person who created speaker credentials can edit it
  canEdit: computed('model.user.username', 'currentUser.use.username', function () {
    if (!this.get('session.isAuthenticated')) {
      return false;
    }

    return this.get('model.user.username') === this.get('currentUser.user.username')

  }).volatile()
});