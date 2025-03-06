import React, { useState } from 'react';
import '../pages/styles/PostModal.css';

const PostModal = ({ post, onClose }) => {
  // State for tracking the like count
  const [likeCount, setLikeCount] = useState(0);

  // State for storing comments
  const [comments, setComments] = useState([
    { user: 'User1', text: 'Beautiful painting!' },
    { user: 'User2', text: 'Love the colors. Amazing work!' }
  ]);

  // State for handling new comment input
  const [newComment, setNewComment] = useState('');

  // State to track if the post is liked
  const [liked, setLiked] = useState(false); 

  // Handler for liking/unliking the post
  const handleLike = () => {
    if (liked) {
      setLikeCount(0); // Reset the like count to 0 if unliked
    } else {
      setLikeCount(1); // Set the like count to 1 if liked
    }
    setLiked(!liked); // Toggle the `liked` state
  };

  // Handler for tracking changes in the comment input field
  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // Update the new comment text
  };

  // Handler for posting a new comment
  const handlePostComment = () => {
    if (newComment.trim()) { // Ensure the comment is not empty
      setComments([...comments, { user: 'Sara Qadi', text: newComment }]); // Add the new comment
      setNewComment(''); // Clear the input field
    }
  };

  // Return null if no post data is available
  if (!post) {
    return null; 
  }

  return (
    <div className="modal-content-wrappers"> {/* Wrapper for modal content */}
      
      {/* Section for displaying the post image */}
      <div className="modal-image1">
        <img src={post.img} alt={`Painting - ${post.title}`} /> {/* Post image */}
      </div>

      {/* Section for comments and interactions */}
      <div className="modal-comments">
        <div id="modalTitle">{post.title}</div> {/* Post title */}
        <div id="modalCaption">{post.description}</div> {/* Post description */}

        {/* Like button and counter */}
        <div className="like-section">
          <button 
            id="likeButton" 
            className="like-button"
            onClick={handleLike} // Like button click handler
          >
            <i 
              className={`fa fa-heart ${liked ? 'liked' : ''}`} 
              id="likeIcon" // Conditional class for like icon
            ></i>
          </button>
          <span id="likeCount">{likeCount}</span> Likes {/* Like counter */}
        </div>

        {/* Section for displaying existing comments */}
        <div id="commentsContainer">
          {comments.map((comment, index) => (
            <p key={index}><strong>{comment.user}:</strong> {comment.text}</p>
          ))}
        </div>

        {/* Input for adding a new comment */}
        <textarea
          id="commentInput"
          value={newComment}
          placeholder="Add a comment..."
          onChange={handleCommentChange} // Update input value on change
        />
        <button id="postComment" onClick={handlePostComment}>
          Post Comment
        </button>
      </div>

      {/* Close button to close the modal */}
      <span className="close" onClick={onClose}>&times;</span>
    </div>
  );
};

export default PostModal;
