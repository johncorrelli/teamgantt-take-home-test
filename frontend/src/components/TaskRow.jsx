import React from "react";
import AssignUserDropdown from "./AssignUserDropdown";

export default function TaskRow({ task, users, onUpdate, onDelete }) {
  const toggleCompleted = React.useCallback(() => {
    onUpdate({ id: task.id, completed: !task.completed });
  }, [onUpdate, task]);

  const deleteTask = React.useCallback(() => {
    onDelete(task.id);
  }, [onDelete, task]);

  const assignUser = React.useCallback(
    (userId) => {
      onUpdate({ id: task.id, assignedUserId: userId });
    },
    [onUpdate, task]
  );

  const user = users.find((x) => x.id === task.assignedUserId);

  return (
    <tr className="fw-normal">
      <td className="align-middle">
        <input
          className="form-check-input"
          onChange={toggleCompleted}
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
        {user && (
          <>
            <img
              className="shadow-3 rounded-circle"
              src={user.avatar}
              alt={user.name}
              style={{ width: "45px", height: "auto", objectFit: "cover" }}
            />
            <span className="ms-2">{user.name}</span>
          </>
        )}
        {!task.assignedUserId && (
          <AssignUserDropdown users={users} onSelect={assignUser} />
        )}
      </th>
      <td className="align-middle">
        <a
          href="#!"
          onClick={deleteTask}
          data-mdb-toggle="tooltip"
          title="Delete"
        >
          <i className="fas fa-times fa-lg text-danger"></i>
        </a>
      </td>
    </tr>
  );
}
