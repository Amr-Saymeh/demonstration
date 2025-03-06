import React, { useState, useEffect } from 'react';
import prof from '../images/prof.jpg';
import '../pages/styles/EditProfileModal.css';

const EditProfileModal = () => {
    const currentImage = (localStorage.getItem('profileImage')) || ("https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg")
    const [profileImage, setProfileImage] = useState(currentImage);
    const [username, setUsername] = useState("Sara Qadi");
    const [bio, setBio] = useState(
        `Hi, I’m Sara Qadi, a passionate painter with a love for capturing the beauty of the world through color and texture. My journey with art began in childhood, where I found joy in sketching the simplest moments around me. Over the years, I’ve honed my skills in oil paintings, blending traditional techniques with my unique vision. ✨`
    );
    const [email, setEmail] = useState("sara.2002.qado@gmail.com");

    const closeModal = () => {
        document.getElementById('editProfileModal').classList.remove('active');
    };

    const previewImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const newImage = e.target.result;
                setProfileImage(newImage);
                localStorage.setItem('profileImage', newImage);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();

        // Update the ProfileHeader DOM elements for username, bio, and profile image
        const profileNameElement = document.querySelector(".profile-details .status span b");
        const profileBioElement = document.querySelector(".profile-details textarea.bio");

        if (profileNameElement) {
            profileNameElement.textContent = username; // Update username
        }

        if (profileBioElement) {
            profileBioElement.value = bio; // Update bio
        }

        // Update the profile image in the ProfileHeader using the ref
        const profileImageElement = document.querySelector(".profiles");
        if (profileImageElement) {
            profileImageElement.src = profileImage; // Update profile image
        }
        localStorage.setItem('profileImage', profileImage);
        setProfileImage(profileImage);
        closeModal();
    };


    useEffect(() => {
        const button = document.getElementById('editProfileButton');
        if (button) {
            button.addEventListener('click', openModal);
        }
        return () => {
            if (button) {
                button.removeEventListener('click', openModal);
            }
        };
    }, []);

    const openModal = () => {
        document.getElementById('editProfileModal').classList.add('active');
    };
    const updatedprofileImage = localStorage.getItem('profileImage')
    return (
        <div className="edit-profile-modal" id="editProfileModal">
            <div className="modal-overlay" onClick={closeModal}></div>
            <div className="modal-content">
                <div className="modal-header">
                    <h3>Edit Profile</h3>
                    <button className="close-btn" onClick={closeModal}>&times;</button>
                </div>
                <form onSubmit={handleSave}>
                    <div className="form-group2">
                        <label htmlFor="profilePicture">Profile Picture</label>
                        <div className="profile-picture-preview">
                            <img src={profileImage} alt="ProfilePic" id="profilePreview" />
                            <button
                                type="button"
                                className="update-btn"
                                onClick={() => document.getElementById('profilePicture').click()}
                            >
                                Update
                            </button>
                            <input type="file" id="profilePicture" accept="image/*" onChange={previewImage} />
                        </div>
                    </div>
                    <div className="form-group2">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group2">
                        <label htmlFor="bio2">Bio</label>
                        <textarea
                            id="bio2"
                            name="bio2"
                            rows="3"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                    </div>
                    {/* Email Section */}
                    <div className="form-group2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-actions">
                        <button type="button" className="cancel-btn" onClick={closeModal}>
                            Cancel
                        </button>
                        <button type="submit" className="save-btn">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default EditProfileModal;
