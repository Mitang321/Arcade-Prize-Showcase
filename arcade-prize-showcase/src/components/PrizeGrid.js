// components/PrizeGrid.js
import React, { useState, useEffect } from "react";
import { fetchGistContent } from "../api/gist"; // Import the Gist API functions
import PostForm from "./PostForm";
import "./PrizeGrid.css";

function PrizeGrid() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const fetchedPosts = await fetchGistContent();
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error loading posts:", error);
      }
    };

    loadPosts();
  }, []);

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
    setPosts(
      posts.map((p) =>
        p.slackHandle === updatedPost.slackHandle ? updatedPost : p
      )
    );
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
