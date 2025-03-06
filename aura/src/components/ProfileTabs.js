import React, { useState, useEffect } from 'react';
import '../pages/styles/ProfileTabs.css';

import PostModal from './PostModal';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('show'); // Set default tab to 'show'
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [selectedPost, setSelectedPost] = useState(null); // Store the selected post for the modal
  const [showPaintings, setShowPaintings] = useState([]); // Paintings for display
  const [salePaintings, setSalePaintings] = useState([]); // Paintings for sale

  // Fetch paintings data when the component mounts
  useEffect(() => {
    fetch('/profile.json') // Load data from a JSON file (or API)
      .then((response) => response.json())
      .then((data) => {
        setShowPaintings(data.showPaintings);
        setSalePaintings(data.salePaintings);
      })
      .catch((error) => console.error('Error loading paintings data:', error));
  }, []);

  // Switch between 'show' and 'sale' tabs
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Open modal when a painting is clicked
  const openModal = (post) => {
    console.log('Opening Modal with post:', post);
    setSelectedPost(post); // Set selected post
    setIsModalOpen(true); // Open modal
  };

  // Close the modal
  const closeModal = () => {
    console.log('Closing Modal');
    setIsModalOpen(false); // Close modal
    setSelectedPost(null); // Clear selected post
  };

  return (
    <div className="tabs-container">
      {/* Tab buttons to toggle between show and sale */}
      <div className="tabs1">
        <button
          className={`tab1 ${activeTab === 'show' ? 'active' : ''}`}
          onClick={() => handleTabClick('show')}
        >
          Posts for Show
        </button>
        <button
          className={`tab1 ${activeTab === 'sale' ? 'active' : ''}`}
          onClick={() => handleTabClick('sale')}
        >
          Posts for Sale
        </button>
      </div>

      {/* Modal for showing post details */}
      {isModalOpen && selectedPost && (
        <div className={`modals ${isModalOpen ? 'open' : ''}`}>
          <PostModal post={selectedPost} onClose={closeModal} />
        </div>
      )}

      {/* Show paintings section */}
      {activeTab === 'show' && (
        <div id="show-posts" className="middle-bottom">
          {showPaintings.map((painting, index) => (
            <div
              className="cards"
              style={{ width: '18rem' }}
              key={index}
              onClick={() => openModal(painting)} // Open modal on click
            >
              <img
                className="card-img-top"
                src={painting.img}
                alt={`Oil Painting - ${painting.title}`}
              />
              <div className="card-body">
                <h5 className="card-title">{painting.title}</h5>
                <p className="card-text">{painting.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Sale paintings section */}
      {activeTab === 'sale' && (
        <div id="sale-posts" className="middle-bottom">
          {salePaintings.map((painting, index) => (
            <div
              className="cards"
              style={{ width: '18rem' }}
              key={index}
              onClick={() => openModal(painting)} // Open modal on click
            >
              <img
                className="card-img-top"
                src={painting.img}
                alt={`Oil Painting - ${painting.title}`}
              />
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
