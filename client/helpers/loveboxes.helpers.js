Template.loveboxesList.helpers({
  loveboxes: function(){
    return Loveboxes.find({ owner: Meteor.user()._id});
  }
});
