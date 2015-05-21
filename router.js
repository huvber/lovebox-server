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
  name:'newLovebox',
  template:'editLovebox',
});
