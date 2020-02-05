document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM fully loaded and parsed!');

    let button = document.getElementById('addTaskButton');
    let taskInput = document.getElementById('taskInput');
    let tasksList = document.getElementById('taskList');
    let removeTasksButton = document.getElementById('removeFinishedTasksButton');
    let counter = document.getElementById('counter');
    // console.log(tasksListItems);

    let index = 0;

    button.addEventListener('click', function (e) {
        if (taskInput.value.length > 5 && taskInput.value.length < 100) {
            let task = taskInput.value;
            let newLi = document.createElement('li');
            let newH1 = document.createElement('h1');
            newH1.innerHTML = task;
            let deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = 'Delete';
            let completeBtn = document.createElement('button');
            completeBtn.innerHTML = 'Complete';
            completeBtn.className = 'completeBtn'

            newLi.appendChild(newH1);
            newLi.appendChild(completeBtn);
            newLi.appendChild(deleteBtn);
            tasksList.appendChild(newLi);
            taskInput.value = '';
            index++;
            counter.innerHTML = index;

            completeBtn.addEventListener('click', function (e) {
                let h1 = this.previousElementSibling;
                h1.classList.toggle('complete');
                if (h1.className === 'complete') {
                    counter.innerHTML = --index;
                } else {
                    counter.innerHTML = ++index;
                }
            });

            deleteBtn.addEventListener('click', function (e) {
                let h1 = this.previousElementSibling;
                let toRemove = this.parentElement;
                if (!h1.classList.length !== 0) {
                    counter.innerHTML = --index;
                }
                toRemove.parentElement.removeChild(toRemove);
            });
        } else {
            taskInput.value = '';
        }


    });

    removeTasksButton.addEventListener('click', function (e) {
        let completeTasks = document.querySelectorAll('.complete');
        for (let i = 0; i < completeTasks.length; i++) {
            let toRemove = completeTasks[i].parentElement;
            toRemove.parentElement.removeChild(toRemove);
        }
        let tasksListItems = document.querySelectorAll('#taskList li');
        index = tasksListItems.length;
        counter.innerHTML = index;
    });

});