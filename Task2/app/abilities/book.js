import { computed } from '@ember/object';
import { Ability } from 'ember-can';
import { inject as service } from '@ember/service';
// import { Promise } from 'rsvp';

export default Ability.extend({
  currentUser: service(),
  session: service(),

  // only the person who wrote a post can edit it
  canEdit: computed('model.user.username', 'currentUser.use.username', function () {
    if (!this.get('session.isAuthenticated')) {
      return false;
    }

    return this.get('model.user.username') === this.get('currentUser.user.username')

    // return new Promise((resolve, reject) => {
    //   return this.get('model.user').then((user) => {
    //     resolve(user.get('username') === this.get('currentUser.user.username'));
    //   }).catch(() => {
    //     reject(false);
    //   });
    // });

  }).volatile()
});
