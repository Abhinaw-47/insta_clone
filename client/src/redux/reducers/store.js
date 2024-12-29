import {configureStore} from '@reduxjs/toolkit'
import postsReducer from '../features/postSlice'
import authReducer from '../features/auth'




const store=configureStore({
    reducer:{
          posts:postsReducer, 
          auth:authReducer,
         
    }
  })











export default store;