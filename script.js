
const clearBtn = document.querySelector('#clear');

let taskInput = document.querySelector('#task');

taskInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    add();
  }
});

function add() {
  let txt = document.querySelector('#task').value;

  if (txt !== '') {
    let tasks = document.querySelector('#tasks');

    let li = document.createElement('li');
    li.classList.add('u-list');

    let checkTask = document.createElement('input');
    checkTask.type = 'checkbox';
    checkTask.classList.add('checks');

    let task = document.createElement('span');
    task.textContent = txt;
    task.classList.add('list-inside');

    let dltButton = document.createElement('button');
    dltButton.classList.add('dlt');
    dltButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    li.appendChild(checkTask);
    li.appendChild(task);
    li.appendChild(dltButton);

    tasks.appendChild(li);

    clearBtn.style.display = 'inline-block';

    checkTask.addEventListener('change', function() {
      if (this.checked) {
        task.style.textDecoration = 'line-through';
      } else {
        task.style.textDecoration = 'none';
      }
    });

    dltButton.addEventListener('click', function() {
      li.remove();
    });

    document.querySelector('#task').value = '';
  } else {
    alert('Add a task');
  }
}

clearBtn.addEventListener('click', function() {
  const allTask = Array.from(document.querySelectorAll('#tasks li'));
  let anyRemoved = false;

  allTask.forEach(li => {
    const checkbox = li.querySelector('input[type="checkbox"]');
    if (checkbox && checkbox.checked) {
      console.log(checkbox.checked);
      li.remove();
      anyRemoved = true;
    }
  });

  if (!anyRemoved) {
    alert('No completed task to clear');
  }

  if (document.querySelector('#tasks').children.length === 0) {
    clearBtn.style.display = 'none';
  }
});
