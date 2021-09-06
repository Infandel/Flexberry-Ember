import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export const PER_PAGE = 3;

export default Controller.extend({
  session: service(),
  queryParams: ['search', 'page'],
  search: '',
  page: 1,

  pages: computed('model.meta.total', function() {
    const total = Number(this.get('model.meta.total'));
    if (Number.isNaN(total) || total <= 0) {
      return [];
    }

    return new Array(Math.ceil(total / PER_PAGE))
      .fill()
      .map((value, index) => index + 1);
  })
});