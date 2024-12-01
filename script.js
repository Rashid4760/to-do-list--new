  // Task Manager JS
document.addEventListener('DOMContentLoaded', () => {
  const todayTaskList = document.querySelector('#today-frame .task-list');
  const upcomingTaskList = document.querySelector('#upcoming-frame .task-list');
  
  const todayTaskInput = document.querySelector('#today-frame .task-actions input');
  const todayTaskCategory = document.querySelector('#today-frame .task-actions select');
  const todayTaskDate = document.querySelector('#today-frame .task-actions input[type="date"]');

  const upcomingTaskInput = document.querySelector('#upcoming-frame .task-actions input');
  const upcomingTaskCategory = document.querySelector('#upcoming-frame .task-actions select');
  const upcomingTaskDate = document.querySelector('#upcoming-frame .task-actions input[type="date"]');

  const addTodayTaskButton = document.querySelector('#today-frame .task-actions button');
  const addUpcomingTaskButton = document.querySelector('#upcoming-frame .task-actions button');

  // Function to create a new task element
  function createTaskElement(taskName, taskCategory) {
    const li = document.createElement('li');
    li.innerHTML = ${taskName} <span>${taskCategory}</span>;
    return li;
  }

  // Add a task to Today Tasks
  addTodayTaskButton.addEventListener('click', () => {
    const taskName = todayTaskInput.value.trim();
    const taskCategory = todayTaskCategory.value;
    const taskDate = todayTaskDate.value;

    if (taskName && taskCategory) {
      const taskElement = createTaskElement(taskName, taskCategory);
      todayTaskList.appendChild(taskElement);

      // Clear the input fields after adding task
      todayTaskInput.value = '';
      todayTaskCategory.value = 'work';
      todayTaskDate.value = '';
    } else {
      alert('Please fill in both task name and category.');
    }
  });

  // Add a task to Upcoming Tasks
  addUpcomingTaskButton.addEventListener('click', () => {
    const taskName = upcomingTaskInput.value.trim();
    const taskCategory = upcomingTaskCategory.value;
    const taskDate = upcomingTaskDate.value;

    if (taskName && taskCategory) {
      const taskElement = createTaskElement(taskName, taskCategory);
      upcomingTaskList.appendChild(taskElement);

      // Clear the input fields after adding task
      upcomingTaskInput.value = '';
      upcomingTaskCategory.value = 'work';
      upcomingTaskDate.value = '';
    } else {
      alert('Please fill in both task name and category.');
    }
  });

  // Handle task deletion (if required in the future)
  // You can add functionality to delete tasks by clicking on them
  todayTaskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.remove();
    }
  });

  upcomingTaskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
      e.target.remove();
    }
  });
});