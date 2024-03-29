import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    save(){
      console.log('+---save action bubbled up to friends new controller');
      return true;
    },
    cancel(){
      console.log('+---cancel action bubbled up to friends new controller');
      return true;
    },
    delete: function(friend){
      friend.destroyRecord().then(()=>{
        this.transitionTo('friends.index');
      })
    }
  }
});
