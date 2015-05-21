Loveboxes = new Meteor.Collection('loveboxes');
Loveboxes.attachSchema(new SimpleSchema({
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
    optional:true
  },
  uri: {
    type: String,
    label: 'Url Applicazione',
    optional:true
  },
  owner: {
    type: String,
    autoform: {
      omit:true
    }
  },
  wifi: {
    type: Object,
    optional:true,
  },
  "wifi.essid": {
    type: String,
    label: 'WIFI Essid'
  },
  "wifi.wpa": {
    type: String,
    label: 'WIFI wpa'
  },
  state: {
    type: Object,
    defaultValue: 'off'
  },
}));
