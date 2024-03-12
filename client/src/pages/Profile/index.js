import React, { useState, useEffect } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import UpoloadAvatar from "./UploadAvatar";

const Profile = () => {


  return (
    <div className="profile">
      <div className="avatar">
        <div className="avatar-wrapper">
          {user.avatarUrl ? (
            <img
              src={`http://localhost:1337${user.avatarUrl}`}
              alt={`${user.username} avatar`}
            />
          ) : (
            <IoPersonCircleOutline />
          )}
          <UpoloadAvatar
            token={token}
            userId={user.id}
            username={user.username}
            avatarUrl={user.avatarUrl}
            setisUserUpdated={setisUserUpdated}
          />
        </div>
      </div>
      <div className="body">
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>
          Account created at: {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Profile;
