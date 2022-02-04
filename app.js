let input_text =  document.getElementById("task");
let btn = document.getElementById("submit");
let list_container = document.getElementById("list-container");

function addToDo() {
    if(input_text.value.length === 0){
        alert("Please enter the tasks");
    }
    else {
        let div = document.createElement("div");
        div.className = "task_container";
        let span = document.createElement("span");
        span.className = "to-do";
        let button = document.createElement("button");
        button.className = "delete";
        input = document.createTextNode(input_text.value);
        button.innerHTML = '`<i class="far fa-trash-alt"></i>`';
        span.appendChild(input);
        span.appendChild(button);
        div.appendChild(span);
        list_container.appendChild(div);

        var current_tasks = document.querySelectorAll(".delete");
            for(var i=0; i<current_tasks.length; i++){
                current_tasks[i].onclick = function(){
                    this.parentNode.remove();
                }
            }
        
        var task = document.querySelectorAll(".task_container");
        for(var i=0; i<task.length; i++){
            task[i].onclick = function(){
                this.classList.toggle("completed");
            }
        }
        input_text.value= "";  
    }
}
btn.addEventListener('click', addToDo);
