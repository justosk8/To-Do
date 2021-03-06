


var body = document.body;
var unorderedList = document.querySelector('#list');
var newTask = document.querySelector('#add-task');
var submit = document.querySelector('button');
var liEl = document.createElement('li');

/*
function addTask() {
    if (newTask === "") {
        alert("Task cannot be empty");
        return;
    }
    var listItem = createNewTask(newTask.value);
    console.log(listItem);
}
*/

var addTask = function() {
    console.log(newTask.value);
    unorderedList.appendChild(liEl);
    liEl.textContent = newTask.value;
}

submit.onclick = addTask;

