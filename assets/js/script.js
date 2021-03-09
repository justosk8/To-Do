

var count = 0;
var body = document.body;
var unorderedList = document.querySelector('#list');
var newTask = document.querySelector('#add-task');
var submit = document.querySelector('button');
var liEl = document.createElement('input');
var taskList = document.querySelectorAll('li');


var addTask = function() {
    console.log(newTask.value);
        
    var liEl = document.createElement('input');
    liEl.type = 'radio';

    unorderedList.appendChild(liEl);
    liEl.textContent  = newTask.value;

    var label = document.createElement('label');
    label.innerText = newTask.value;

    newTask.value = ""; 
    
}



submit.onclick = addTask;
