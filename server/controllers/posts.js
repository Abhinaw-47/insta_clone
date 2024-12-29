import mongoose from "mongoose";
import postMessage from "../models/postMessage.js";

// export const createPost = async (req, res) => {
//   const post = req.body;
//   // console.log(post);
//   const newpost = new postMessage({
//     ...post,
//     creator: post.creator,
//     postedAt: new Date().toISOString(),
//   });
//   try {
//     await newpost.save();
//     res.status(201).json(newpost);
//   } catch (error) {
//     res.status(409).json({ message: error.message });
//   }
// };



export const createPost = async (req, res) => {
  const post = JSON.parse(req.body.post);
  console.log(post);
  const newpost = new postMessage({
    ...post,
    creator: post.creator,
    userid:req.userId,
    img:{
      data: req.file.path,
      contentType: req.file.mimetype,
    },
    postedAt: new Date().toISOString(),
  });
  try {
    await newpost.save();
    res.status(201).json(newpost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};



export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    
  }
};


export const deletePost=async(req,res)=>{
  console.log("delete");
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404)
  await postMessage.findByIdAndDelete(_id);
}


export const updatePost=async(req,res)=>{
 

  try {
    console.log('update')
    const { id: _id } = req.params;
    // const post = JSON.parse(req.body.post);
    const post = req.body.post ? JSON.parse(req.body.post) : {};
    console.log(post)
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No post with that id");
    const updatedPost = await postMessage.findByIdAndUpdate(
      _id,
      { ...post, _id,img:{
      data: req.file.path,
      contentType: req.file.mimetype,
    }},
      { new: true }
    );
    // res.json(updatedPost);
  
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: error.message });
  }

}

