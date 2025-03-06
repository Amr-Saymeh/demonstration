import React, { useState } from 'react';
import prof from '../images/prof.jpg';
import back from '../images/back.jpg';
import '../pages/styles/ProfileHeader.css';
import FollowButton from '../components/FollowButton';
import { Link } from 'react-router-dom';

const ProfileHeader = () => {
  const [followers, setFollowers] = useState(1050); // State for follower count

  const handleFollowToggle = (isFollowed) => {
    setFollowers((prevCount) => (isFollowed ? prevCount + 1 : prevCount - 1));
  };

  return (
    <div className="middle-top">
      <div className="profile-container">
        <img src={prof} alt="Profile" className="profiles" />
        <img src={back} alt="Background" className="back" />
      </div>

      <div className="profile-details">
        <p className="status">
          <span><b>Sara Qadi</b></span>
          <br />
          <br />
          <span><strong>11</strong> Posts</span> {" | "}
          <span><strong>{followers}</strong> Followers</span>

          <FollowButton onFollowToggle={handleFollowToggle} /> {/* Pass the callback */}
          <Link to="/community"><i className="fa fa-commenting"></i></Link>
        </p>

        <textarea
          className="bio"
          rows="7"
          cols="65"
          defaultValue={`Hi, I’m Sara Qadi, a passionate painter with a love for capturing the beauty of the world through color and texture. 
          My journey with art began in childhood, where I found joy in sketching the simplest moments around me. 
          Over the years, I’ve honed my skills in oil paintings, blending traditional techniques with my unique vision. ✨`}
        ></textarea>
      </div>
    </div>
  );
};

export default ProfileHeader;
