import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },

  model({ search }) {
    if (search) {
      return this.get('store').query('book', { tags_like: search });
    }

    return this.get('store').findAll('book');
  },

  actions: {
    loading() {
      return false;
    }
  }
});