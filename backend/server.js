
const express = require("express");
const multer = require('multer');
const path = require("path");
const app = express();
const port = 3001;

app.use(express.static(path.resolve(__dirname, "./public")))

const storage = multer.diskStorage({
   destination: "./public/uploads/",
   filename: function(req, file, cb){
      cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
   }
});

const upload = multer({
   storage: storage,
   limits:{fileSize: 1000000},
}).single("myImage");

// const router = express.Router();

app.post("/uploadphoto", (req, res) => {
    upload(req, res, 
     function(err) {
       console.log("Request ---", req.body);
       console.log("Request file ---", req.file);
       
       res.json("/uploads/" + req.file.filename)
    }
    )
 });

 app.listen(port, () => {
    console.log("App is listening on port", port);
  });