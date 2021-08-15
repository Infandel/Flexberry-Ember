import Route from '@ember/routing/route';

export default Route.extend({
  model({ id }) {
    let meeting = this.get('store').findRecord('meeting', id)

    return {
      meeting,
      report: {
        reportDate: '',
        bookScore: null,
        presentationURL: '',
        videoURL: '',
        review: '',
        meeting
      }
    }
  },
});
// export default Route.extend({
//   model({ id }) {
//     return this.get("store").findRecord('meeting', id);
//   }
// });