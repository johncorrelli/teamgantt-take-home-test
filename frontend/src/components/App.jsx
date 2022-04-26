import React from "react";
import NewTaskForm from "./NewTaskForm";
import TaskRow from "./TaskRow";
import useApi from "../hooks/use-api";

export default function App() {
  const { tasks, users, createTask, updateTask, deleteTask } = useApi();

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card">
              <div className="card-body p-4">
                <div className="text-center pt-3 pb-2">
                  <img
                    src="https://assets-global.website-files.com/5a5399a10a77cc0001b18774/5c6da96049391c530be2fbda_Logo%20-%20Color.png"
                    alt="TeamGantt"
                    height="40"
                  />
                  <h2 className="my-4">My Team's Tasks</h2>
                  <NewTaskForm onCreate={createTask} />
                </div>

                <table className="table mb-0">
                  <thead>
                    <tr>
                      <th scope="col" style={{ width: "0" }}></th>
                      <th scope="col">Task</th>
                      <th scope="col" style={{ width: "300px" }}>
                        Assigned User
                      </th>
                      <th scope="col" style={{ width: "0" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((task) => (
                      <TaskRow
                        key={task.id}
                        task={task}
                        users={users}
                        onUpdate={updateTask}
                        onDelete={deleteTask}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
