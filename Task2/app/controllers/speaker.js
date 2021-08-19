import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { debounce } from '@ember/runloop';


export default Controller.extend({
  session: service(),
  queryParams: ["search"],
  search: '',

  init() {
    this._super(...arguments);
    set(this, 'value', '');
  },

  actions: {
    inputHandler(event) {
      let { target } = event;
      debounce(() => {
        this._updateValue(target);
      }, 2000);
    }
  },

  _updateValue(target) {
    let updatedSearch = this.get('store').query('speaker', { q: target.value })
    set(this, 'model', updatedSearch);
  }
});