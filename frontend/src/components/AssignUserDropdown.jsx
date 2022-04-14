import React from "react";

export default function AssignUserDropdown({ users, onSelect }) {
  return (
    <div className="dropdown">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        Assign a user
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {users.map((user) => (
          <li>
            <a
              className="dropdown-item"
              href="#!"
              onClick={() => onSelect(user.id)}
            >
              {user.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
