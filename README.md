# TeamGantt Take Home Test

Hey there!

Thank you for taking the time to connect with us! If you've made it this far, we believe you could be a great fit here at TeamGantt! But before we get too much further we'd love to see your development chops!

Our product is all about helping people plan and execute on their projects! Whether they work alone or on a team, TeamGantt is there to help them crush their deadlines! Delegating tasks is a useful strategy for a Project Manager to ensure tasks are resolved. In this task, you'll help our Product Manger Kelsey delegate tasks to members of the team.

To help you get started, we have setup an application that has all you need. You'll have both a `frontend` and a `backend` directory to mimic both a backend database/api and front end react app. To complete the task, you'll need to complete work in both directories.

## Respecting your time

One thing TeamGantt believes in is a true work/life balance. We not only say it, we live it! We know the time involved in for this task will take from your personal life. Regardless of the outcome of this interview process, you receive payment for your time spent on this task.

## The project

Defined below are the requirements for your project. This will serve as a good basis to show your problem solving skills as it relates to the domain of project management.

This sample repository saves you time by starting with a simple frontend and backend. You will need to extend the entire app to support:

### backend

- [ ] it should add support for users
  - you do not need to worry about login authentication for users. it is safe to assume to assume we are always logged in as Kelsey.
  - users should have the following properties:
    - [ ] id
    - [ ] name
    - [ ] avatar url
- [ ] it should support assigning users to the existing tasks

### frontend

- [ ] it should support assigning users to tasks
- [ ] it should show a user's avatar when they are assigned to a task
- [ ] it should support updating task completion

## Prerequisites for running

- Docker installed.
- PHP installed (to run `sail` commands).
- You will need the following ports available:
  - `8080` for the client
  - `80` for the api
  - `3306` for the database

## Instructions

1. Clone this repository.
1. Setup a new private repository with the source code.
1. Run `docker-compose up`.
1. Install necessary dependencies in each directory.
1. Run database migrations and seeders.
1. Checkout a new branch.
1. Code.
1. Ensure all tests pass.
1. Add commits for your changes and push up your new branch.
1. Create a Pull Request when you are ready and reach out to us for setting up the next stage of the interview.

## FAQ

**How will I be evaluated?**

You will bring your solution to us and get the chance to walk through your decisions with us. This is a starting point for discussion. We want to understand your reasoning and depth of knowledge. What issues you ran into and how you solved them. As a rule, the discussion is more important to us than the actual code. No one is an expert on all things, this helps us gain an understanding of your strengths and potential areas of improvement.

Here are some of the things we are looking for in this evaluation:

- **Code quality** - How you reason about making sure changes to the code is both readable and maintainable.
- **Testing** - How you reason about what needs testing and how to test it.
- **System design** - How you reason about concepts like re-usability, separation of concerns, and various abstractions.
- **Infrastructure and ops** - How you would run a system and what's important to think about?

**Why did you pick this stack?**

This stack represents a more simple version of the tech stack we use in production. While we use a varying amount of languages at TeamGantt, we have chosen the languages used most.

**Can I make changes to the existing code?**

You sure can! If you've made changes to existing code, we'd love to hear why you introduced those changes.

**Can I use extra libraries/frameworks?**

This is America! We are a free country. You are free to chose whichever libraries or frameworks you desire. The important thing is that you can explain why you reached for those resources. We recommend you stick with the `frontend` and `backend` stack that exist in the repo already.

**What if I get stuck?**

We all get stuck at times. Even the best of us! Feel free to reach to me at `john@teamgantt.com` and someone from the team can help you get unstuck. There is no shame in reaching out!

## Closing

We're rooting for you to succeed and can't wait to review the changes you've made to this!
