// A reference implementation of an API service that stores data in memory,
// and executes asynchronous CRUD operations on tasks and users.
// ---
//
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
let TASK_FIXTURES = [
  { id: 1, name: "Write specifications", completed: true, assignedUserId: 4 },
  { id: 2, name: "Scaffold server", completed: true, assignedUserId: 1 },
  { id: 3, name: "Write client", completed: false, assignedUserId: 3 },
  {
    id: 4,
    name: "Complete take-home test",
    completed: false,
    assignedUserId: null,
  },
];
let NEXT_TASK_ID = 5;

const USER_FIXTURES = [
  {
    id: 1,
    name: "Brian",
    avatar:
      "https://assets-global.website-files.com/5a690960b80baa0001e05b0f/6165867309c00f1e68071084_brian%402x-p-500.png",
  },
  {
    id: 2,
    name: "Caleb",
    avatar:
      "https://assets-global.website-files.com/5a690960b80baa0001e05b0f/61658687d990739814a49931_caleb%402x.png",
  },
  {
    id: 3,
    name: "Ishmael",
    avatar:
      "https://assets-global.website-files.com/5a690960b80baa0001e05b0f/6165869ac1b9a011ea569ef0_ishmael%402x.png",
  },
  {
    id: 4,
    name: "John",
    avatar:
      "https://assets-global.website-files.com/5a690960b80baa0001e05b0f/5b96dfc5cf0aa92aa6df26ed_john%402x.png",
  },
];

// CRUD Operations
// ---

export function getUsers() {
  return resolveLater([...USER_FIXTURES]);
}

export function getTasks() {
  return resolveLater([...TASK_FIXTURES]);
}

export function createTask(task) {
  const newTask = { ...task, id: NEXT_TASK_ID++ };

  TASK_FIXTURES.push(newTask);

  return resolveLater(newTask);
}

export function updateTask(task) {
  const index = TASK_FIXTURES.map((x) => x.id).indexOf(task.id);
  const oldTask = TASK_FIXTURES[index];
  const updatedTask = { ...oldTask, ...task };

  TASK_FIXTURES.splice(index, 1, updatedTask);

  return resolveLater(updatedTask);
}

export function deleteTask(id) {
  const index = TASK_FIXTURES.map((x) => x.id).indexOf(id);

  TASK_FIXTURES.splice(index, 1);

  return resolveLater();
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
