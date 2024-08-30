// components/PostForm.js
import React, { useState, useEffect } from "react";
import { fetchGistContent, updateGist } from "../api/gist"; // Import the Gist API functions
import "./PostForm.css";

function PostForm({ onClose, onSubmit, post }) {
  const [slackHandle, setSlackHandle] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [prizeImageUrl, setPrizeImageUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (post) {
      setSlackHandle(post.slackHandle || "");
      setProfilePicUrl(post.profilePicUrl || "");
      setPrizeImageUrl(post.prizeImageUrl || "");
      setDescription(post.description || "");
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      slackHandle,
      profilePicUrl,
      prizeImageUrl,
      description,
    };

    try {
      // Fetch existing posts
      const existingPosts = await fetchGistContent();

      // Update or add the post
      const updatedPosts = post
        ? existingPosts.map((p) =>
            p.slackHandle === post.slackHandle ? newPost : p
          )
        : [...existingPosts, newPost];

      // Update Gist with new posts
      await updateGist(updatedPosts);

      if (onSubmit) {
        onSubmit(newPost);
      }
      onClose();
    } catch (error) {
      console.error("Error handling post submission:", error);
    }
  };

  return (
    <div className="post-form-overlay">
      <div className="post-form-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>{post ? "Edit Post" : "Create a New Post"}</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Slack Handle:
            <input
              type="text"
              placeholder="@Mitang Hindocha"
              value={slackHandle}
              onChange={(e) => setSlackHandle(e.target.value)}
              required
            />
          </label>
          <label>
            Profile Picture URL:
            <input
              type="url"
              value={profilePicUrl}
              onChange={(e) => setProfilePicUrl(e.target.value)}
              required
            />
          </label>
          <label>
            Prize Image URL:
            <input
              type="url"
              value={prizeImageUrl}
              placeholder="Post Your Image to #cdn and paste the link here"
              onChange={(e) => setPrizeImageUrl(e.target.value)}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </label>
          <button type="submit" className="submit-button">
            {post ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
