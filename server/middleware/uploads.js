import express from "express";
import multer from "multer";
import path from "path";

const storage=multer.diskStorage({

    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },
    
    filename:(req,file,cb)=>{
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname); // Get file extension
        cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },

});

const upload=multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }
})




export default upload;