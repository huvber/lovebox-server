MBins = new FS.Collection('mbins',{
  stores: [ new FS.Store.GridFS('mp3Store')]
});
MBins.allow({
 insert: function(){
   return true;
 },
 update: function(){
   return true;
 },
 remove: function(){
   return true;
 },
 download: function(){
   return true;
 },
 fetch:null

});
Mp3s = new Meteor.Collection('mp3')
Mp3Schema = new SimpleSchema({
  filename: {
    type:   String,
    label:  'Filename',
    autoform:{omit:true},
    optional:true
  },
  lovebox: {
    type:String,
    autoform:{ omit:true },
    optional:true
  },
  file: {
    type: String,
    label:'File',
    autoform: {
      afFieldInput: {
        type: 'cfs-file',
        collection: 'mbins',
      }
    }
  }
});
Mp3s.attachSchema(Mp3Schema);

Meteor.methods({
  'mp3Add': function(mp3){
    try {
      check(mp3, Mp3Schema);
      Mp3Schema.clean(mp3);
    }catch(e){
      throw new Meteor.Error(e);
    }
    var id = Mp3s.insert(mp3);
    return mp3;
  },
  'mp3List': function(loveboxId){
    var mp3s = Mp3s.find({lovebox: loveboxId}).fetch();
    mp3s.forEach(function(entry){
      entry.url = MBins.findOne({ _id: entry.file }).url();
      entry.filename = MBins.findOne({ _id: entry.file }).original.name;
    });
    return mp3s;
  },
  'mp3Remove': function(mp3Id){
    var mp3 = Mp3s.find({ _id: mp3Id});
    MBins.remove(mp3.file);
    Mp3s.remove(mp3Id,function(err){
      if(err)
        throw new Meteor.error(500,'Impossible to delete');
    });
  }
});
Mp3s.allow({
  insert: function (userId, nodeDoc) { return true;},
  update: function (userId, nodeDoc) {
    return userId === nodeDoc.owner ? true : false;
  }
});
