import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
import profilePic from "../assets/profile.jpg";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="page-container">
      
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "⮜" : "⮞"}
        </button>
        <ul>
          <li onClick={() => navigate("/")}>{isOpen ? "My Profile" : "👤"}</li>
          <li onClick={() => navigate("/articles/page/1")}>{isOpen ? "My Articles (page 1)" : "📝"}</li>
          <li onClick={() => navigate("/articles/page/2")}>{isOpen ? "My Articles (page 2)" : "📝"}</li>
          <li onClick={() => navigate("/articles/page/3")}>{isOpen ? "My Articles (page 3)" : "📝"}</li>
        </ul>
      </div>

      <div className="main-content">
        <div className="content-wrapper">

          <div className="profile-card">
            <img src={profilePic} alt="Profile" className="profile-pic" />
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
              <h6>Articles Published</h6>
            </div>
            <div className="stat">
              <h3>8</h3>
              <h6>Drafts</h6>
            </div>
            <div className="stat">
              <h3>5</h3>
              <h6>Pending Reviews</h6>
            </div>
          </div>

          <div className="profile-footer">
            <p>📞 Contact: +880 1927266998</p>
            <p>🌐 Website: <a href="#gmail">www.samiralzaber.com</a></p>
            <p>🔗 Follow me: <a href="#twitter">Twitter</a> || <a href="#linkedin">LinkedIn</a> || <a href="#github">GitHub</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;