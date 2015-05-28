AutoForm.hooks({
  loveboxEdit:{
    onSuccess:function(operation,lovebox){
      Router.go('home');
    }
  }
});
Template.loveboxDetail.events({
  'click #stop': function(e,template){
    e.preventDefault();
    var newState = 'stop';
    var data = { _id: (template.data ? template.data._id: undefined),
                  state: newState
              };
    Meteor.call('loveboxChangeState',data,function(error,id){
      if(error){
        throwError(error.reason,'danger');
      }
    });
  },
  'click #play': function(e,template){
    e.preventDefault();
    var newState = 'play';
    var data = { _id: (template.data ? template.data._id: undefined),
                  state: newState
              };
    Meteor.call('loveboxChangeState',data,function(error,id){
      if(error){
        throwError(error.reason,'danger');
      }
    });
  }
});
