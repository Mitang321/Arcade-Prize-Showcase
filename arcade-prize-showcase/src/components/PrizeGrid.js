import React, { useState } from "react";
import "./PrizeGrid.css";
import PostForm from "./PostForm";

function PrizeGrid({ posts, onEdit }) {
  const [selectedPost, setSelectedPost] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  const handleImageClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseDetails = () => {
    setSelectedPost(null);
    setEditingPost(null);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
  };

  const handleSubmit = (updatedPost) => {
    if (onEdit) {
      onEdit(updatedPost);
    }
    handleCloseDetails();
  };

  return (
    <div className="prize-grid">
      {selectedPost && !editingPost ? (
        <div className="prize-details-overlay">
          <button onClick={handleCloseDetails} className="close-details-button">
            X
          </button>
          <img
            src={selectedPost.prizeImageUrl}
            alt="Prize"
            className="prize-detail-image"
          />
          {selectedPost.profilePicUrl && (
            <img
              src={selectedPost.profilePicUrl}
              alt="Profile"
              className="profile-detail-image"
            />
          )}
          <p className="slack-handle-detail">{selectedPost.slackHandle}</p>
          <p className="description-detail">{selectedPost.description}</p>
          <button
            onClick={() => handleEditPost(selectedPost)}
            className="edit-button"
          >
            Edit
          </button>
        </div>
      ) : editingPost ? (
        <PostForm
          post={editingPost}
          onClose={handleCloseDetails}
          onSubmit={handleSubmit}
        />
      ) : posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="prize-item">
            {post.prizeImageUrl ? (
              <img
                src={post.prizeImageUrl}
                alt="Prize"
                className="prize-image"
                onClick={() => handleImageClick(post)}
              />
            ) : (
              <p>No image available</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default PrizeGrid;
