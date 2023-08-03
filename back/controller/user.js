const express = require('express')
const path = require('path')
const router = express.Router()
const User = require('../model/user')
const {upload} = require('../multer')
const ErrorHandler = require('../utls/errorHandler')

router.post('/create-user',upload.single('file'),async(req,res,next)=>{
  const { name, email, password, avatar } = req.body;
  const userEmail = await User.findOne({email})
  if(userEmail){
    return next(new ErrorHandler('User Already Exists',400))

  }
  const filename = req.file.fieldname;
  const fileUrl = path.join(filename)
  const user = {
     
    avater: fileUrl
  }
  console.log(user)
})

module.exports = router