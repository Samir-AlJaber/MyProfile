import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./HomePage.css";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "⮜" : "⮞"}
        </button>
        <ul>
          <li onClick={() => navigate("/")}>{isOpen ? "Profile" : "👤"}</li>
          <li onClick={() => navigate("/")}>{isOpen ? "My Articles" : "📝"}</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="content-wrapper">
          <div className="profile-card">
            
            <div>
              <h2 className="profile-name">Samir Al Zaber</h2>
              <p className="profile-info">📧 samir.cse.20230104136@aust.edu</p>
              <p className="profile-info">📅 Joined: 01 Jan 2025</p>
              <p className="profile-bio">
                Hello! I am Samir, a Computer Science student at AUST. I love coding, web development,
                and creating projects to showcase my skills. Welcome to my profile page!
              </p>
            </div>
          </div>

          <div className="stats-card">
            <div className="stat">
              <h3>12</h3>
              <p>Articles Published</p>
            </div>
            <div className="stat">
              <h3>8</h3>
              <p>Drafts</p>
            </div>
            <div className="stat">
              <h3>5</h3>
              <p>Pending Reviews</p>
            </div>
          </div>

          <div className="profile-footer">
            <p>📞 Contact: +880 1927266998</p>
            <p>🌐 Website: www.samiralzaber.com</p>
            <p>🔗 Follow me: Twitter | LinkedIn | GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
