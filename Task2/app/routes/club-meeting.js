import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model({ search }) {
    if (search) {
      return this.get('store').query('club-meeting', { meetingDate_like: search });
    }

    return this.get('store').findAll('club-meeting');
  },

  actions: {
    loading() {
      return false;
    }
  }
});