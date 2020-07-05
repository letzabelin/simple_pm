import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for TasksReflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {
  sort(event) {
    const element = document.getElementById('tasks-list');
    const tasks_elements = document.getElementsByClassName('task-item');
    const tasks = Array.from(tasks_elements).map((task, index) => {
      return { id: task.dataset.taskId, position: (index + 1) };
    });

    element.dataset.tasks = JSON.stringify(tasks);
    this.stimulate('TasksReflex#sort', element);
  }
}
