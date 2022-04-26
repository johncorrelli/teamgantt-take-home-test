import React from "react";
import AssignUserDropdown from "./AssignUserDropdown";

export default function TaskRow({ task, users, onUpdate, onDelete }) {
  return (
    <tr className="fw-normal">
      <td className="align-middle">
        <input
          className="form-check-input"
          onChange={() => onUpdate({ id: task.id, completed: !task.completed })}
          type="checkbox"
          checked={task.completed}
          aria-label="..."
        />
      </td>
      <td className="align-middle">
        {task.completed && <s>{task.name}</s>}
        {!task.completed && <span>{task.name}</span>}
      </td>
      <th>
        <AssignUserDropdown
          assignedUserId={task.assignedUserId}
          users={users}
          onSelect={(userId) =>
            onUpdate({ id: task.id, assignedUserId: userId })
          }
        />
      </th>
      <td className="align-middle">
        <a
          href="#!"
          onClick={() => onDelete(task.id)}
          data-mdb-toggle="tooltip"
          title="Delete"
        >
          <i className="fas fa-times fa-lg text-danger"></i>
        </a>
      </td>
    </tr>
  );
}
