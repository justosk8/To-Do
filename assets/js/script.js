

var count = 0;
var body = document.body;
var unorderedList = document.querySelector('#list');
var newTask = document.querySelector('#add-task');
var submit = document.querySelector('button');
var liEl = document.createElement('li');



var addTask = function() {
    console.log(newTask.value);
    var liEl = document.createElement('li');
    unorderedList.appendChild(liEl);
    liEl.textContent = newTask.value;
    newTask.value = ""; 
    
}

var deleteTask = function() {

}

var saveTask = function() {
    localStorage.setItem();
    
}

submit.onclick = addTask;
