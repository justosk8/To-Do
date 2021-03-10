

var count = 0;
var body = document.body;
var unorderedList = document.querySelector('#list');
var newTask = document.querySelector('#add-task');
var submit = document.querySelector('#submit-btn');
var liEl = document.createElement('button');



var addTask = function() {
    console.log(newTask.value);
        
    var liEl = document.createElement('button');
    unorderedList.appendChild(liEl);
    liEl.textContent  = newTask.value;
    newTask.value = ""; 
    
}

var deleteTask = function() {
unorderedList.removeChild('button');
}

submit.onclick = addTask;
liEl.onclick = deleteTask;