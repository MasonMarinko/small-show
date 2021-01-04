import React from "react";
import { useQuery } from "@apollo/react-hooks";
import AdminUser from "../AdminUser";
// import UserList from "../UserList";
// import { QUERY_PRODUCTS } from "../../utils/queries";
// import spinner from "../../assets/spinner.gif";
// import { useStoreContext } from '../../utils/GlobalState';
// import { UPDATE_PRODUCTS } from "../../utils/actions";
import { QUERY_ALL_USERS } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
// import { useDispatch, useSelector } from "react-redux";

function UserList() {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // const { loading, data } = useQuery(QUERY_PRODUCTS);

  const {loading, data:userName} = useQuery(QUERY_ALL_USERS)
  
  
  function filterUsers() {
    return userName?.users.filter(
      (user) => user.twitchUserName
    );
  }

  return (
    <div className="my-2">
      {!loading ? (
        <div className="video-row">
          {filterUsers().map((users) => (
            console.log(users.adminApproved),
            <AdminUser
              key={users._id}
              _id={users._id}
              twitchUserName={users.twitchUserName}
              firstName={users.firstName}
              lastName={users.lastName}
              adminApproved={users.adminApproved.toString()}
            />
          ))}
        </div>
      ) : (
        <h3>No streamers are currently active!</h3>
      )}
      {/* {loading ? <img src={spinner} alt="loading" /> : null} */}
    </div>
  );
}

export default UserList;
