SimpleSchema.debug = true;
AutoForm.addHooks(['mp3Add'],{
    before   : {
      method: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      method: CfsAutoForm.Hooks.afterInsert
    },
    onSuccess: function(formType, result) {
        Router.go('loveboxDetail',{_id : result.lovebox});
    }
  }
);
Template.mp3Item.events({
  'click .del': function(e, template){
    e.preventDefault();
    if (confirm("Remove this Mp3?")) {
      var mp3Id = this._id;
      Meteor.call('mp3Remove',mp3Id, function(err,id){
        if(err)
          return alert(error.reason);
      });
    }
  }
});
