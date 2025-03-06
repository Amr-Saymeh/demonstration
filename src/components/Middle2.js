import React from 'react';
import '../pages/styles/Middle.css';
import ProfileHeader2 from './ProfileHeader2';
import ProfileTabs2 from './ProfileTabs2';


const Middle = () =>{
    return(
        <div className='middle'>
            <ProfileHeader2/>
            <ProfileTabs2/>
        </div>
    )
}

export default Middle;