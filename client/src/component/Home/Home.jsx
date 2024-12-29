import Sidebar from "./Sidebar"
import Posts from "../Posts/Posts"
import Suggestionbar from "./Suggestionbar"
import styles from './Home.module.css'
import { useEffect, useState } from "react"
import { getPosts } from "../../redux/features/postSlice"
import { useDispatch } from "react-redux";



export default function Home() {
  const dispatch=useDispatch();

  const[currentId, setCurrentId]=useState(0)

useEffect(()=>{
dispatch(getPosts())
},[dispatch]);

  return (
    <div className={styles.flexHome}>
      <Sidebar  />
      <Posts currentId={currentId} setCurrentId={setCurrentId}  />
      <Suggestionbar />
     
      </div>

      
  )
}
