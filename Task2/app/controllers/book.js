import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ["search", "searchByTag"],
  search: '',
  searchByTag: ''
});