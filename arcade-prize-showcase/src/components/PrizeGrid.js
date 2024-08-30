import React from "react";
import "./PrizeGrid.css";

function PrizeGrid({ posts }) {
  return (
    <div className="prize-grid">
      {posts.length === 0 ? (
        <p></p>
      ) : (
        posts.map((post, index) => (
          <div key={index} className="prize-item">
            {post.prizeImageUrl ? (
              <img
                src={post.prizeImageUrl}
                alt="Prize"
                className="prize-image"
              />
            ) : (
              <p>No image available</p>
            )}
            <div className="prize-details">
              {post.profilePicUrl ? (
                <img
                  src={post.profilePicUrl}
                  alt="Profile"
                  className="profile-image"
                />
              ) : (
                <p>No profile image</p>
              )}
              <p className="slack-handle">{post.slackHandle}</p>
              <p className="description">{post.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default PrizeGrid;
