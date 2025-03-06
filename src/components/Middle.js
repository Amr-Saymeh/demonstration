import React from 'react';
import '../pages/styles/Middle.css';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';


const Middle = () =>{
    return(
        <div className='middle'>
            <ProfileHeader/>
            <ProfileTabs/>
        </div>
    )
}

export default Middle;