import axios from "axios";

const GIST_ID = "4d145da79b7646cd42d7f773c5fa2d3b";
const GIST_FILE = "posts.json";
const GITHUB_TOKEN = process.env.token;

export const fetchGistContent = async () => {
  try {
    const response = await axios.get(`https://api.github.com/gists/${GIST_ID}`);
    const gistFiles = response.data.files;
    return JSON.parse(gistFiles[GIST_FILE].content);
  } catch (error) {
    console.error("Error fetching gist content:", error);
    return [];
  }
};

export const updateGist = async (content) => {
  try {
    await axios.patch(
      `https://api.github.com/gists/${GIST_ID}`,
      {
        files: {
          [GIST_FILE]: {
            content: JSON.stringify(content, null, 2),
          },
        },
      },
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Gist updated successfully");
  } catch (error) {
    console.error("Error updating gist:", error);
  }
};
