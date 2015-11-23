import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  article: null, // passed-in
  articleStates: null, // passed-in
  actions: {
    saveArticle() {
      let article = this.get('article');
      if(aricle.get('hasDirtyAttributes')){
        this.sendAction('save', article);
      }
    }
  }
});
