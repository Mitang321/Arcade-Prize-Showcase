import React, { useState } from "react";
import "./PostForm.css";

function PostForm({ onClose, onSubmit }) {
  const [slackHandle, setSlackHandle] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [prizeImageUrl, setPrizeImageUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const newPost = {
        slackHandle,
        profilePicUrl,
        prizeImageUrl,
        description,
      };
      onSubmit(newPost);
    }
    onClose();
  };

  return (
    <div className="post-form-overlay">
      <div className="post-form-container">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2>Create a New Post</h2>
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
