const express = require('express')
var fs = require('fs');
const app = express()

const UploadImage = app.delete('/', (req, res) => {
    try {
                fs.unlinkSync(req.body.ImageLink);
                res.json({ImageLink:req.body.ImageLink,message:"Image Deleted Successfully"})
                // const imageUpload = req.file.path
                // res.json({ImageLink:imageUpload,message:"Image Uploaded Successfully"})
            } catch (error) {
                res.send(error)
            }
})

module.exports = UploadImage
