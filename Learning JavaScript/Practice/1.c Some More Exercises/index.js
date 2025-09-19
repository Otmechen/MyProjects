
/*
Using multiple variables:

const studentName = "John Doe";
const studentRollNo = 12345;
const studentClass = "Grade 10";

document.getElementById("student-info").innerHTML = `
  <p>Name: ${studentName}</p>
  <p>Roll No: ${studentRollNo}</p>
  <p>Class: ${studentClass}</p>
`;
Using an object:

const student = {
  name: "John Doe",
  rollNo: 12345,
  class: "Grade 10",
};

document.getElementById("student-info").innerHTML = `
  <p>Name: ${student.name}</p>
  <p>Roll No: ${student.rollNo}</p>
  <p>Class: ${student.class}</p>
`;
*/

// Replace the multiple variables below with an Object to get the same output
/*
const description = "This is a task";
const deadline = "2023-07-13";
const done = false;

const Task = {
  description: "This is a task",
  deadline: "2023-07-13",
  done: false
}

document.getElementById("taskDetails").innerHTML = `
  <p>Task Description: ${Task.description}</p>
  <p>Dead Line: ${Task.deadline}</p>
  <p>Is the task done?: ${Task.done?"YES":"NO"}</p>
`;
*/

const tasks = [
  {
    description: "Complete project proposal",
    deadline: "2023-07-20",
    done: false,
  },
  {
    description: "Prepare presentation slides",
    deadline: "2023-07-22",
    done: false,
  },
  {
    description: "Submit final report",
    deadline: "2023-07-25",
    done: true,
  },
];

const taskList = document.getElementById("task-list");

for (let i = 0; i < tasks.length; i++) {
  // Store the i-th task in a variable task
  const task = tasks[i];

  const taskItem = document.createElement("div");// Create a taskItem div 
  // Add the class "task-item"
  taskItem.classList.add("task-item");

  const descriptionElement = document.createElement("p");// Create a paragraph element
  descriptionElement.textContent = `Description: ${task.description}`;

  const deadlineElement = document.createElement("p");// Create a paragraph element
  deadlineElement.textContent = `Deadline: ${task.deadline}`;

  const doneStatusElement = document.createElement("p");// Create a paragraph element
  doneStatusElement.textContent = `Done: ${task.done ? "Yes" : "No"}`;

  taskItem.appendChild(descriptionElement);
  taskItem.appendChild(deadlineElement);
  taskItem.appendChild(doneStatusElement);

  taskList.appendChild(taskItem);
}
