const multer = require('multer')

const storage = multer.diskStorage({
  destination: function(req,file,cb){
    cb(null,'uploads/');
  },
  filename: function(req,file,cb){
    const uniueSuffix = Date.now() + '_'+Math.round(Math.random()*90);
    const filename = file.originalname.split('.')[0];
    cb(null,filename+'-'+uniueSuffix+".png");
  }
})

exports.upload = multer({storage:storage})