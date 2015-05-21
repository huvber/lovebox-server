Meteor.publish('loveboxes',function(){
  return Loveboxes.find({ owner: Meteor.user()._id });
});
