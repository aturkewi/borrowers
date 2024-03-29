import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('friend');
  },

  // activate(){
  //   console.log('-----activate hook called-----')
  // },
  // deactivate(){
  //   console.log('-----deactivate hook called-----')
  // },

  resetController: function(controller, isExisting, transition){
    if (isExisting){
      var model = controller.get('model');
      if (model.get('isNew')){
        model.destroyRecord();
      }
    }
  },
  actions:{
    save(){
      console.log('+--save action bubbled up to friends new route');
      return true;
    },
    cancel(){
      console.log('+--cancel action bubbled up to friends new route');
      return true;
    }
  }
});
