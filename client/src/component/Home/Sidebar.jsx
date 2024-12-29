import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { LuMessageCircle } from "react-icons/lu";
import { RxAvatar } from "react-icons/rx";
import {
  InstagramLogo,
  NotificationsLogo,
  CreatePostLogo,
  SearchLogo,
} from "../../assets/constants";
import styles from "./Sidebar.module.css";
import { useState } from "react";
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import Imgform from "../CreatePost/Imgform";
import { useDispatch } from "react-redux";
import { Logout } from "../../redux/features/auth";


export default function Sidebar() {
  const [opened, { open, close }] = useDisclosure(false);

  const dispatch=useDispatch();
  const navigate=useNavigate();


  function handlelogout(){

    dispatch(Logout());
        navigate('/auth');
  }

  return (
    <div className={styles.sidebarContainer}>
      <div>
        <div>
          <Link to="/">
            <InstagramLogo />
          </Link>
        </div>

        <div className={styles.iconText}>
          <i>
            <AiFillHome size={29} />
          </i>

          <p>Home</p>
        </div>

        <div className={styles.iconText}>
          <i>
            <SearchLogo />
          </i>

          <p>Search</p>
        </div>
        <div className={styles.iconText}>
          <i>
            {" "}
            <NotificationsLogo />
          </i>

          <p>Notifications</p>
        </div>
        {/* <Link to='/posts/create' style={{textDecoration:'none',color:'white'}}> */}
        <div className={styles.iconText} onClick={open}>
          
          <i>
            <CreatePostLogo />
          </i>

          <p>Create</p>
        </div>
        {/* </Link>  */}
        <div className={styles.iconText}>
          <i>
            <LuMessageCircle size={29} />
          </i>
          <p>Message</p>
        </div>
        <div className={styles.iconText}>
          <i>
            <RxAvatar size={29} />
          </i>
          <p>Profile</p>
        </div>
      </div>

      <div className={styles.iconText}>
        <i>
          <BiLogOut size={29}  onClick={handlelogout}/>
        </i>

        <p>Log out</p>
      </div>
      <Modal opened={opened} onClose={close} title="Create new post" centered   size='lg'>
         <Imgform />
      </Modal>

     
    </div>
  );
}
