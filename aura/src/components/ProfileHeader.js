import React, { useRef } from 'react';
import prof from '../images/prof.jpg';
import back from '../images/back.jpg';
import '../pages/styles/ProfileHeader.css';

const ProfileHeader = () => {
  // Reference for the profile image
  const profileImageRef = useRef();
  const profileImage = localStorage.getItem('profileImage') || ("https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg");
  return (
    <div className="middle-top">
      <div className="profile-container">
        <img src={profileImage} alt="Profile" className="profiles" ref={profileImageRef} />
        <img src={back} alt="Background" className="back" />
      </div>

      <div className="profile-details">
        <p className="status">
          <span><b>Sara Qadi</b></span>
          <br />
          <br />
          <span><strong>15</strong> Posts</span>
          {" | "}
          <span><strong>350</strong> Followers</span>
          <button
            id="editProfileButton"
            className="edit-profile-btn"
          >
            Edit Profile
          </button>
          <i className="fa fa-gear"></i>
        </p>

        <textarea
          className="bio"
          rows="7"
          cols="65"
          defaultValue={
            `Hi, I’m Sara Qadi, a passionate painter with a love for capturing the beauty of the world through color and texture. 
            My journey with art began in childhood, where I found joy in sketching the simplest moments around me. 
            Over the years, I’ve honed my skills in oil paintings, blending traditional techniques with my unique vision. ✨`
          }
        ></textarea>
      </div>
    </div>
  );
};

export default ProfileHeader;
