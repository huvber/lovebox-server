Meteor.publish('loveboxes',function(){
  return Loveboxes.find();
});
Meteor.publish('mp3s',function(){
  return Mp3s.find();
});
Meteor.publish('mbins',function(){
  return MBins.find();
});
