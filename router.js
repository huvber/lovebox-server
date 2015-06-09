Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
});

Router.route('/', {
  name:'home',
  action: function(){
    if(!Meteor.user()){
      if(Meteor.loggingIn())
        this.render('loginHome');
      else
        this.render('pressHome');
    } else
      this.render('loginHome');
  }
});
Router.route('/loveboxes/new',{
  name:'loveboxNew',
  template:'loveboxEdit',
});
Router.route('/loveboxes/:_id',{
  name:'loveboxDetail',
  template:'loginHome',
  yieldTemplates: {
    'loveboxDetail': {to: 'right'},
  },
  data: function(){
    return Loveboxes.findOne(this.params._id);
  }
});
Router.route('/loveboxes/:_id/mp3',{
  name:'mp3Add',
  template:'loginHome',
  yieldTemplates: {
    'mp3Add': {to: 'right'},
  },
  data: function(){
    return {lovebox : this.params._id };
  }
});
