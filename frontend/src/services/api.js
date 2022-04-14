// An API-like service that executes asynchronous CRUD operations.
// ---
// getUsers() : Promise{Array.<User>}
// getTasks() : Promise{Array.<Task>}
// updateTask(PartialTask) : Task
// createTask(NewTask) : Task
// deleteTask(id) : void
//
// <User> = { id, name, avatar }
// <Task> = { id, name, completed, assignedUserId }
// <PartialTask> = { id, [name], [completed], [assignedUserId] }
// <NewTask> = { name, [completed], [assignedUserId] }

const ASYNC_DELAY = 0;

const USER_FIXTURES = [
  {
    id: 1,
    name: "Brian",
    avatar:
      "https://assets-global.website-files.com/5a690960b80baa0001e05b0f/6165867309c00f1e68071084_brian%402x-p-500.png"
  },
  {
    id: 2,
    name: "Caleb",
    avatar:
      "https://assets-global.website-files.com/5a690960b80baa0001e05b0f/61658687d990739814a49931_caleb%402x.png"
  },
  {
    id: 3,
    name: "Ishmael",
    avatar:
      "https://assets-global.website-files.com/5a690960b80baa0001e05b0f/6165869ac1b9a011ea569ef0_ishmael%402x.png"
  },
  {
    id: 4,
    name: "John",
    avatar:
      "https://assets-global.website-files.com/5a690960b80baa0001e05b0f/5b96dfc5cf0aa92aa6df26ed_john%402x.png"
  }
];

// CRUD Operations
// ---

export function getUsers() {
  return resolveLater([...USER_FIXTURES]);
}

export async function getTasks() {
  const response = await fetch('http://localhost/api/tasks');
  const users = await response.json();
  return users.data;
}

export async function createTask(task) {
  const response = await fetch('http://localhost/api/tasks', {
    method: 'POST',
    body: JSON.stringify(task)
  });

  const result = await response.json();

  return result.data;
}

export function updateTask(task) {
  return Promise.resolve(task);
}

export function deleteTask(id) {
  return Promise.resolve('true');
}

// Helpers
// ---

function resolveLater(data) {
  return new Promise(function (resolve, reject) {
    window.setTimeout(function () {
      resolve(data);
    }, ASYNC_DELAY);
  });
}
