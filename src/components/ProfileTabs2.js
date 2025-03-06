import React, { useState, useEffect } from 'react';
import '../pages/styles/ProfileTabs.css';

import PostModal2 from '../components/PostModal2';

const ProfileTabs = () => {
  // State to manage the active tab (either 'show' or 'sale')
  const [activeTab, setActiveTab] = useState('show');
  
  // State to manage whether the modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // State to hold the selected painting data to be passed to the modal
  const [selectedPost, setSelectedPost] = useState(null);
  
  // State to store the paintings that are for show
  const [showPaintings, setShowPaintings] = useState([]);
  
  // State to store the paintings that are for sale
  const [salePaintings, setSalePaintings] = useState([]);

  // Fetch paintings data from a JSON file when the component mounts
  useEffect(() => {
    fetch('/profile2.json') // Load data from profile2.json (or an API)
      .then((response) => response.json())
      .then((data) => {
        setShowPaintings(data.showPaintings); // Set show paintings data
        setSalePaintings(data.salePaintings); // Set sale paintings data
      })
      .catch((error) => console.error('Error loading paintings data:', error));
  }, []);

  // Switch between 'show' and 'sale' tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update the active tab state
  };

  // Function to open the modal with the selected post (painting)
  const openModal = (post) => {
    console.log('Opening Modal with post:', post); // Log the selected post
    setSelectedPost(post); // Set the selected post for the modal
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const closeModal = () => {
    console.log('Closing Modal');
    setIsModalOpen(false); // Close the modal
    setSelectedPost(null); // Clear the selected post data
  };

  return (
    <div className="tabs-container">
      {/* Tab buttons to toggle between 'show' and 'sale' */}
      <div className="tabs1">
        <button
          className={`tab1 ${activeTab === 'show' ? 'active' : ''}`}
          onClick={() => handleTabClick('show')} // Switch to 'show' tab
        >
          Posts for Show
        </button>
        <button
          className={`tab1 ${activeTab === 'sale' ? 'active' : ''}`}
          onClick={() => handleTabClick('sale')} // Switch to 'sale' tab
        >
          Posts for Sale
        </button>
      </div>

      {/* Modal for displaying post details (opens when a painting is clicked) */}
      {isModalOpen && selectedPost && (
        <div className={`modals ${isModalOpen ? 'open' : ''}`}>
          <PostModal2 post={selectedPost} onClose={closeModal} /> {/* Pass selected post to modal */}
        </div>
      )}

      {/* Display paintings for show */}
      {activeTab === 'show' && (
        <div id="show-posts" className="middle-bottom">
          {showPaintings.map((painting, index) => (
            <div
              className="cards"
              style={{ width: '18rem' }}
              key={index}
              onClick={() => openModal(painting)} // Open modal on painting click
            >
              <img className="card-img-top" src={painting.img} alt={`Oil Painting - ${painting.title}`} />
              <div className="card-body">
                <h5 className="card-title">{painting.title}</h5>
                <p className="card-text">{painting.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Display paintings for sale */}
      {activeTab === 'sale' && (
        <div id="sale-posts" className="middle-bottom">
          {salePaintings.map((painting, index) => (
            <div
              className="cards"
              style={{ width: '18rem' }}
              key={index}
              onClick={() => openModal(painting)} // Open modal on painting click
            >
              <img className="card-img-top" src={painting.img} alt={`Oil Painting - ${painting.title}`} />
              <div className="card-body">
                <h5 className="card-title">{painting.title}</h5>
                <p className="card-sale">Price: {painting.price}</p> {/* Show price for sale items */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileTabs;
