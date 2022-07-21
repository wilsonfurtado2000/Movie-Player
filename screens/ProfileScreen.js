import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import Nav from "../Nav";
import { selectUser } from "./app/features/userSlice";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profile_screen">
      <Nav />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img
            src="https://pngimg.com/uploads/netflix/netflix_PNG12.png"
            alt=""
          />

          <div className="profile_detail">
            <h2>{user?.email}</h2>
            <div className="profile_plans">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profile_signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
