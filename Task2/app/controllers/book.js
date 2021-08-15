import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  queryParams: ["search", "searchByTag"],
  search: '',
  searchByTag: ''
});