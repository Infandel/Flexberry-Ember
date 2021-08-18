import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    },
    searchByTag: {
      refreshModel: true
    }
  },

  model({ search, searchByTag }) {
    
    if (search || searchByTag) {
      return this.get('store').query('book', { q: search, tags_like: searchByTag });
    }
    return this.get('store').findAll('book');
  },

  actions: {
    loading() {
      return false;
    }
  }
});