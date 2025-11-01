import React, { useEffect, useState } from "react";
import './github.css'

const GithubProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [username, setUsername] = useState("MrDharn");
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  async function fetchUserProfile() {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();

      //   console.log(data.login)
      if (data && data.login) {
        setLoading(false);
        setUserProfile(data);
      }
    } catch (error) {
      setErrMsg(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserProfile();
  }, [username]);

  if (loading) {
    return <div className="loading">Loading Please Wait !!!</div>;
  }

  if (errMsg !== null) {
    return <div className="error-message">Data Couldnot be loaded</div>;
  }

  const handleSubmit = () => {
    setUsername(inputValue);
    setInputValue("");
  };
  function handleChange(e) {
    setInputValue(e.target.value);
  }

  console.log(inputValue);
  return (
    <div>
      <div className="search-field">
        <input
          type="text"
          placeholder="Enter username"
          onChange={(e) => handleChange(e)}
          value={inputValue}
        />

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {userProfile && userProfile.login ? (
        <div className="profile-container">
          {!imageLoaded && <div className="loading-image">Loading Image </div>}

          <img
            src={userProfile.avatar_url}
            alt={userProfile.avatar_url}
            onLoad={()=>setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
          <h4>Name: {userProfile.name}</h4>
          <p>Followers: {userProfile.followers}</p>
          <p>Following: {userProfile.following}</p>
          <p>Number of repo: {userProfile.public_repos}</p>
        </div>
      ) : (
        <div className="error">Not Found</div>
      )}
    </div>
  );
};

export default GithubProfile;
