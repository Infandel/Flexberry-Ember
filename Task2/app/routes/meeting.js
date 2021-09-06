import Route from '@ember/routing/route';
import { PER_PAGE } from '../controllers/meeting';


export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  },

  model({ search, page }) {
    const query = {
      _page: page,
      _limit: PER_PAGE,
    };

    if (search) {
      return this.get('store').query('meeting', { meetingDate_like: search });
    }

    // return this.get('store').findAll('meeting');
    return this.get('store').query('meeting', query)
  },

  actions: {
    loading() {
      return false;
    }
  }
});