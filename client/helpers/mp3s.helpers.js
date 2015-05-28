Template.mp3Item.helpers({
  url : function(){
    //console.log(MBins.find().fetch());
    return MBins.findOne({ _id: this.file }).url();
  },
  filename: function(){
    //console.log();
    return MBins.findOne({ _id: this.file }).name();
  }
});
