import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile({ profile }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Clear authentication data
    navigate('/all'); // Navigate after logout
  };

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <p><strong>Landmark:</strong> {profile.landmark}</p>
      <p><strong>City:</strong> {profile.city}</p>
      
      <Link to="/editprofile" className="common-btn">
        Edit Profile
      </Link>

      <button onClick={handleLogout} className="common-btn">
        Logout
      </button>
    </div>
  );
}

export default Profile;
