import React from "react";


import Middle from "../components/Middle";
import LeftSection from "../components/LeftSection";
import Modal from "../components/Modal";



const Profile = () =>{
  return(
      <div className='myProfile'>
         <LeftSection/>
         <Middle/>
         <Modal/>
      </div>
  )
}

export default Profile;
