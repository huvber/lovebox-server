wifiSchema = new SimpleSchema({
  essid: {
    type: String,
    label: 'WIFI Essid',
    optional: true
  },
  wpa: {
    type: String,
    label:'WIFI wpa',
    optional: true
  }
});
loveboxSchema = new SimpleSchema({
  name: {
    type: String,
    label: 'Lovebox ID'
  },
  serial: {
    type: String,
    label: 'Serial Number'
  },
  description:{
    type: String,
    label: 'Description',
    optional:true,
    autoform:{
      afFieldInput: {
        type: "textarea",
        rows: 4,
      }
    }
  },
  owner: {
    type: String,
    optional:true,
    autoform: {
      omit:true
    }
  },
  wifi: {
    type: [wifiSchema],
    optional:true,
  },
  state: {
    type: String,
    defaultValue: 'off',
    optional:true,
    autoform:{
      omit:true
    }
  },
  ip: {
    type: String,
    optional:true,
    autoform:{
      omit:true
    }
  }
});

Loveboxes = new Meteor.Collection('loveboxes');
Loveboxes.attachSchema(loveboxSchema);
Meteor.methods({
  'loveboxAdd': function(lovebox){
    if(lovebox.owner === undefined)
      lovebox.owner = Meteor.user()._id;
    var id = Loveboxes.insert(lovebox);
    console.log(id);
  },
  'getLovebox': function(loveboxid){
    return Loveboxes.findOne(loveboxid);
  },
  'loveboxChangeState': function(attr){
    var lovebox = Loveboxes.findOne(attr._id);
    lovebox.state = attr.state;
    Loveboxes.update(lovebox._id,{$set: lovebox});
    return true;
  }
});
Loveboxes.allow({
  insert: function (userId, nodeDoc) { return true;},
  update: function (userId, nodeDoc) {
    return userId === nodeDoc.owner ? true : false;
  }
});
