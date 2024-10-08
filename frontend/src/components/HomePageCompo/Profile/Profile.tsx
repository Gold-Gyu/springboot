import React from 'react';
import './Profile.css';
import '@/hooks/useMovePage';
import { useNavigate } from 'react-router-dom';
interface ProfileProps {
  isLoggedIn: boolean;
  username: string;
  profileImage: string;
  signupDate: string;
  rated: string;
  introduce: string;
}

const Profile: React.FC<ProfileProps> = ({
  isLoggedIn,
  username,
  profileImage,
  rated,
  introduce,
  signupDate,
}) => {
  const navigate = useNavigate();
  const movePage = () => {
    navigate('/mypage');
  };
  return (
    <div className="profile">
      {isLoggedIn ? (
        <div>
          <div className="logged-in">
            <img
              src={profileImage}
              alt="Profile"
              className="profile-image"
              // onClick={movePage}
            />
            <div className="info">
              <div className="username-rated">
                <div className="username">
                  {username.length > 5
                    ? `${username.substring(0, 5)}...`
                    : username}
                </div>
                <div className="rated rated-box">{rated}</div>
              </div>
              <div className="signup-date">{signupDate}</div>
              <div className="introduce">{introduce}</div>
            </div>
          </div>
        </div>
      ) : (
        <a href="/login" className="login-link">
          Login
        </a>
      )}
    </div>
  );
};

export default Profile;
