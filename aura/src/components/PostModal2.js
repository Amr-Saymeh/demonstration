import React, { useState } from 'react';
import '../pages/styles/PostModal.css'; 

const PostModal = ({ post, onClose }) => {
  // State to track the number of likes for the post
  const [likeCount, setLikeCount] = useState(0);

  // State to hold the list of comments for the post
  const [comments, setComments] = useState([
    { user: 'User1', text: 'Beautiful painting!' },
    { user: 'User2', text: 'Love the colors. Amazing work!' }
  ]);

  // State for the current text being entered into the comment box
  const [newComment, setNewComment] = useState('');

  // State to track whether the post has been liked by the user
  const [liked, setLiked] = useState(false); 

  // Function to handle the like button click
  const handleLike = () => {
    if (liked) {
      setLikeCount(0); // If already liked, reset the like count
    } else {
      setLikeCount(1); // If not liked, increment the like count
    }
    setLiked(!liked); // Toggle the liked state
  };

  // Function to handle changes in the comment input field
  const handleCommentChange = (e) => {
    setNewComment(e.target.value); // Update the state with the input value
  };

  // Function to handle posting a new comment
  const handlePostComment = () => {
    if (newComment.trim()) { // Ensure the comment is not empty or just spaces
      setComments([...comments, { user: 'Sara Qadi', text: newComment }]); // Add the new comment to the list
      setNewComment(''); // Clear the input field
    }
  };

  // If no post is provided, do not render anything (return null)
  if (!post) {
    return null; 
  }

  return (
    <div className="modal-content-wrappers"> {/* Modal wrapper */}
      
      {/* Section for displaying the image of the post */}
      <div className="modal-image1">
        <img src={post.img} alt={`Painting - ${post.title}`} /> {/* Display the image */}
      </div>

      {/* Section for displaying post details, likes, and comments */}
      <div className="modal-comments">
        <div id="modalTitle">{post.title}</div> {/* Display the title of the post */}
        <div id="modalCaption">{post.description}</div> {/* Display the description of the post */}

        {/* Section for the like button and like count */}
        <div className="like-section">
          <button 
            id="likeButton" 
            className="like-button"
            onClick={handleLike} // Handle like button click
          >
            <i 
              className={`fa fa-heart ${liked ? 'liked' : ''}`} 
              id="likeIcon" // Conditionally apply the "liked" class if the post is liked
            ></i>
          </button>
          <span id="likeCount">{likeCount}</span> Likes {/* Display the like count */}
        </div>

        {/* Section to display the list of comments */}
        <div id="commentsContainer">
          {comments.map((comment, index) => (
            <p key={index}>
              <strong>{comment.user}:</strong> {comment.text}
            </p>
          ))}
        </div>

        {/* Input field for adding a new comment */}
        <textarea
          id="commentInput"
          value={newComment} // Controlled input linked to the state
          placeholder="Add a comment..." // Placeholder text for the input
          onChange={handleCommentChange} // Update the state on input change
        />
        <button id="postComment" onClick={handlePostComment}>
          Post Comment {/* Button to post the new comment */}
        </button>
      </div>

      {/* Close button to dismiss the modal */}
      <span className="close" onClick={onClose}>&times;</span>
    </div>
  );
};

export default PostModal;
