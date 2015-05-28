Template.loveboxesList.helpers({
  loveboxes: function(){
    return Loveboxes.find({ owner: Meteor.userId()}).fetch();
  }
});
Template.loveboxDetail.helpers({
  mp3s : function(){
    return Mp3s.find({ lovebox: this._id }).fetch();
  }
});
