import { useState,useEffect } from "react";

import { postCreate, updateData } from "../../redux/features/postSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Imgform({currentId}) {
  const [file, setFile] = useState(null);
  // file && console.log(file.name);
 const dispatch=useDispatch();


  const [postData, setPostData] = useState({
    creator: "",
    postedAt: new Date().toISOString(),
    selectedFile: "",
  });

  const post=useSelector((state)=>{

    return currentId ? state.posts.posts.find((p) => p._id === currentId) : null
  });

  useEffect(() => {

    if(post) setPostData(post)
  },[post]);


 

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formdata =new FormData();
    if (!file) {
      alert("Please select a file");
      return;
    }
    formdata.append('image', file);
    formdata.append('post', JSON.stringify(postData));

if(currentId){

  console.log('Updating post:', currentId);
   dispatch(updateData(currentId, formdata));
  

}
else{
   
    
 
  dispatch(postCreate(formdata))   ;
}



    // if (!file) {
    //   alert("Please select a file");
    //   return;
    // }
    // const formdata =new FormData;
    // formdata.append('image', file);
    // formdata.append('post', JSON.stringify(postData));
    // try {
    //   // const response= await axios.post("http://localhost:5000/posts/upload",formdata,{
    //   //   headers: { "Content-Type": "multipart/form-data" },
    //   // });
    //   // console.log(response.data);
    //   // alert("Image uploaded successfully");
    //    dispatch(postCreate(formdata))   ;

    // } catch (error) {
    //   console.log(error.message);
    // }
   
  }


  return (
    <div>

<form action="" encType="multipart/form-data"    onSubmit={handleSubmit}>
<input type="text" value={postData.creator} onChange={(e)=>setPostData({...postData,creator:e.target.value})} />
<input type = "file" name="image" onChange = {e => setFile(e.target.files[0])}/>

<button type = "submit">Submit</button>


</form>

    </div>
  )
}
