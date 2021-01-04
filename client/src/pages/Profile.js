import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import {QUERY_USER} from "../utils/queries";
import { useQuery } from '@apollo/react-hooks';

function Profile() {
  const { data: userData } = useQuery(QUERY_USER);
  const user = userData?.user || {};
  console.log(user)

  function twitchName(props) {
    if (user.twitchUserName) { 
      return (       
        <p>
        <u className = "profile-name">Twitch Username:</u> {user.twitchUserName}
      </p>
        )
    }
  }
  
  useEffect(()=> {
  })
  return (
    <div className="container my-1">
      <Link to="/">
        ← Go to Home
      </Link>

      <h2 className = "profile-header">Your Profile</h2>
        <div className="flex-row">
          <p>
            <u className = "profile-name">First Name:</u> {user.firstName}
          </p>
        </div>
        <div className="flex-row">
          <p>
            <u className = "profile-name">Last Name:</u> {user.lastName}
          </p>
        </div>
        <div className="flex-row">
          {twitchName()}
         </div>
          <div className="flex-row">
        <p>
          <u className = "profile-name">Email Address:</u> {user.email}
        </p>
        </div>
        <div className="flex-row">
          <p>**More features coming soon!**</p>
        </div>    
    </div>
  )
}
export default Profile