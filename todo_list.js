function TodoList() {
    this.tasks = [];
};

function Task(description) {
  this.description = description;
  this.completed = false;
  this.id = undefined;
}

TodoList.prototype.add = function(description) {
  to_add = new Task(description);
  to_add.id = this.tasks.length + 1;
  this.tasks.push(to_add)
}

TodoList.prototype.list = function() {
  return this.tasks;
}

Task.prototype.complete = function() {
  this.completed = true ;
}

// // This will search for "bread" and then delete one at that index
// TodoList.prototype.remove = function(task) {
//   this.tasks.splice(task.description,1);
// }

// // This will search for the required ID and then subtract 1 (because we start at 1) and then delete one at that index
// TodoList.prototype.remove = function(task) {
//   this.tasks.splice(task.id - 1,1);
// }

// This will search for the required ID and then subtract 1 (because we start at 1) and then delete one at that index
TodoList.prototype.remove = function(task) {
  this.tasks.splice(task,1);
}

// Note we are using a JavaScript constructor now.
var groceryList = new TodoList();
groceryList.add('bread');
groceryList.add('cheese');
groceryList.add('milk');

// tasks is now an array of Task objects
groceryList.tasks //-> [Task, Task, Task]

groceryList.list();
//> Task {id: 1, description: 'bread', completed: false}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// getting a task object
var breadTask = groceryList.tasks[0];

breadTask.id //-> 1 (some unique numerical ID)
breadTask.description //-> 'bread'
breadTask.completed //-> false


// This should complete the task
breadTask.complete();

breadTask.completed //-> true

groceryList.list();
//> Task {id: 1, description: 'bread', completed: true}
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}


// This should remove the task from the todo list
groceryList.remove(breadTask);

groceryList.list();
//> Task {id: 2, description: 'cheese', completed: false}
//> Task {id: 3, description: 'milk', completed: false}
