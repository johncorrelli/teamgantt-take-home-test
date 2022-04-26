import React from "react";
import User from "./User";

export default function AssignUserDropdown({
  users,
  onSelect,
  assignedUserId,
}) {
  const assignedUser =
    assignedUserId && users.find((x) => x.id === assignedUserId);

  return (
    <div className="dropdown">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        {assignedUser ? <User user={assignedUser} /> : "Assign a user"}
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {users.map((user) => (
          <li key={user.id}>
            <button className="dropdown-item" onClick={() => onSelect(user.id)}>
              <User avatarSize="20" user={user} />
            </button>
          </li>
        ))}
        {assignedUser && (
          <li key="remove-assignment">
            <button className="dropdown-item" onClick={() => onSelect()}>
              Remove assignment
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
