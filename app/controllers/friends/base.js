import Ember from 'ember';

export default Ember.Controller.extend({
  hasEmail: Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName: Ember.computed.notEmpty('model.lastName'),
  hasTwitter: Ember.computed.notEmpty('model.twitter'),
  isValid: Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),

  // isValid: Ember.computed(
  //   'model.email',
  //   'model.firstName',
  //   'model.lastName',
  //   'model.twitter',
  //   {
  //     get(){
  //       return !Ember.isEmpty(this.get('model.email')) &&
  //        !Ember.isEmpty(this.get('model.firstName')) &&
  //        !Ember.isEmpty(this.get('model.lastName')) &&
  //        !Ember.isEmpty(this.get('model.twitter'));
  //     }
  //   }
  
  actions:{
    save(){
      if(this.get('isValid')){
        this.get('model').save().then((friend) => {
          this.transitionToRoute('friends.show', friend);
        });
      }else {
        this.set('errorMessage', 'You have to fill in all the fields');
      }
      // Stops from bubbling
      return false;
    },
    cancel(){
      return true;
    }
  }
});
