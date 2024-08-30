import React, { useState } from "react";
import "./PrizeGrid.css";

function PrizeGrid({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleImageClick = (post) => {
    setSelectedPost(post);
  };

  const handleCloseDetails = () => {
    setSelectedPost(null);
  };

  return (
    <div className="prize-grid">
      {selectedPost ? (
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
        </div>
      ) : posts.length === 0 ? (
        <p></p>
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
              <p></p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default PrizeGrid;
