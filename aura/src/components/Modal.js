import React from 'react';
import EditProfileModal from './EditProfileModal';
import SettingsModal from './SettingsModal';
import PostModal from './PostModal';


const Modal = () =>{
    return(
        <div className='modal'>
       <EditProfileModal/>
       <SettingsModal/>
       <PostModal/>
        </div>
    )
}

export default Modal;