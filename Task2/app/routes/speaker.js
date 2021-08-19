import Route from '@ember/routing/route';
import { debounce } from '@ember/runloop';


export default Route.extend({
  // queryParams: {
  //   search: {
  //     refreshModel: true
  //   }
  // },
  
  model({ search }) {
    if (!search) {
      
      return this.get('store').findAll('speaker')
    }
    
    // return this.get('store').findAll('speaker')
  },
  
  // actions: {
  //   loading() {
  //     return false;
  //   }
  // },
})