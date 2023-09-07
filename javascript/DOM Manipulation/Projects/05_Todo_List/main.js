const add_task_btn = document.querySelector('button');
const task_input = document.querySelector('.inp-tag');
const task_container = document.querySelector('.task-container');
const body = document.querySelector('body')
let new_task, hr, target, new_task_value, first_task, task_tobe_removed;
let task_count = 0;
body.addEventListener('mouseleave', () => {
    alert("Special offer for you! 80% OFF ONLY FOR NEXT 2 HOUR...");
})


add_task_btn.addEventListener('click', () => {
    task_value = task_input.value;
    task_input.value = "";
    if (task_value == ""){
        alert('Please enter a task first!')
    }
    else{
        task_count++;
        new_task = document.createElement('div');
        new_task.classList.add('task');
        new_task.innerHTML = `<p class="task-name">${task_value}</p>
                <div class="task-controls">
                    <i class="fa-solid fa-edit edit-btn control-btn"></i>
                    <i class="fa-solid fa-check check-btn control-btn"></i>
                    <i class="fa-solid fa-trash trash-btn control-btn"></i>
                    </div>`
        if (task_count > 1){
            hr = document.createElement('hr');
            hr.setAttribute('class', 'seperator');
            task_container.appendChild(hr);
        }
        task_container.appendChild(new_task);
    }
})

task_container.addEventListener('click', (e) => {
    target = e.target;
    if (target.classList.contains('edit-btn')){
        new_task_value = prompt("Enter new task:");
        if (new_task_value == ""){
            alert('Please enter a task first!')
        }
        else{
            target.parentElement.previousElementSibling.innerText = new_task_value;
        }
    }
    if (target.classList.contains('check-btn')){
        target.parentElement.previousElementSibling.style.textDecoration = "line-through";
    }
    if (target.classList.contains('trash-btn')){
        task_count--;
        first_task = task_container.firstElementChild;
        task_tobe_removed = target.parentElement.parentElement;
        if (task_tobe_removed == first_task){
            if (task_count > 0){
                task_tobe_removed.nextElementSibling.remove();
            }
            task_tobe_removed.remove();
        }
        else{
            task_tobe_removed.previousElementSibling.remove();
            task_tobe_removed.remove();
        }
    }
})