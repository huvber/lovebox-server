SimpleSchema.debug = true;
AutoForm.addHooks(['mp3Add'],{
    before   : {
      method: CfsAutoForm.Hooks.beforeInsert
    },
    after    : {
      method: CfsAutoForm.Hooks.afterInsert
    },
    onSuccess:function(operation,mp3s){
      Router.go('home');
    }
  }
);
