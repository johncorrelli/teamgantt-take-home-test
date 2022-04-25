import React from "react";

export default function User({ avatarSize = 45, user }) {
  return (
    <>
      <img
        className="shadow-3 rounded-circle"
        src={user.avatar}
        alt={user.name}
        style={{ width: `${avatarSize}px`, height: "auto", objectFit: "cover" }}
      />
      <span className="ms-2">{user.name}</span>
    </>
  );
}
