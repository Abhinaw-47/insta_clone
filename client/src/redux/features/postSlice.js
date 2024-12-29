import { createSlice } from "@reduxjs/toolkit";
import * as api from "../../api"



export const postCreate=(post)=>async(dispatch)=>{
    

    try {
        const {data}=await api.createPost(post)

        dispatch(create(data))
        
    } catch (error) {
        console.log(error.message)
    }
}


export const getPosts=()=>async(dispatch)=>{

    try {

        const {data}= await api.fetchPosts();
       dispatch(fetch(data))
        
        
    } catch (error) {
        console.log(error.message)
    }

}

export const removePost=(id)=>async(dispatch)=>{
    try {
        await api.deletePost(id);
        dispatch(delete_post(id))
    } catch (error) {
        console.log(error)
    }

}


export const updateData=(id, post)=>async(dispatch)=>{
    
    try {
        const {data}=await api.updatePost(id,post);
        // console.log(data)
        dispatch(update(data))
        
    } catch (error) {
        console.log(error)
    }
}

const postsSlice=createSlice({
    name:'Posts',
    initialState:{
        posts:[],
       
    },

    reducers:{
        create:(state,action)=>{
            state.posts.push(action.payload)
           
     },
     fetch:(state, action)=>{
        state.posts=action.payload
     },
     delete_post:(state, action)=>{
        state.posts=state.posts.filter((post)=>post._id !== action.payload);
     },
     update:(state, action)=>{
state.posts=state.posts.map((post)=>post._id===action.payload._id ? action.payload : post);
     },
     
    }

})



export const {create, fetch, delete_post,update}=postsSlice.actions;

export default postsSlice.reducer;