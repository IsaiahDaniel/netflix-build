import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import { logout } from "../../features/auth/authSlice";
import "./Profile.css";
import { auth } from "../../firebase";


const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  return (
    <div className="profile">
      <h3 className="profile__title">Edit Profile</h3>
      <div className="profile__details">
        <Link to="/profile">
          <img
            src="https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png"
            alt=""
          />
        </Link>
        <>  
          <div>
            <h3 className="profile__detailsEmail">
              { user }
            </h3>
            <h4 className="profile__detailsPlans">
              Plans (current plan: premium)
            </h4>
            <p>
              Renewal Date: 04/03/2023
            </p>
            <div className="profile__subscriptionPlans">
              <div className="profile__subscriptionPlan">
                <div>
                  <h3>Netflix standard</h3>
                  <p>1080p</p>
                </div>
                <Button>
                  Subscribe
                </Button>
              </div>

              <div className="profile__subscriptionPlan">
                <div>
                  <h3>Netflix standard</h3>
                  <p>1080p</p>
                </div>
                <Button>
                  Subscribe
                </Button>
              </div>

              <div className="profile__subscriptionPlan">
                <div>
                  <h3>Netflix Premium</h3>
                  <p>1080p</p>
                </div>
                <Button disabled="true">
                  Subscribe
                </Button>
              </div>
            </div>
            <br />
            <div onClick={() => {
              dispatch(logout())
              auth.signOut();
              navigate("/login");
            }
            }>
              <Button styles={{ width: "100%" }}>Sign Out</Button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Profile;
