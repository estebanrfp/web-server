var router = require('tiny-router'),
    tessel = require('tessel'),
    sdcardlib = require('sdcard'),
    sdcard = sdcardlib.use(tessel.port['D']);

sdcard.on('ready', function(){
   sdcard.getFilesystems(function(err, fss){
       var fs = fss[0];
       router
           .use('static', {path: '/public'})
           .use('fs', fs)
           .listen(8080);
       console.log('Running Server');
   });
});