tasks = [
  { currentTask: "Estudar Vue.js", completed: false },
  { currentTask: "Estudar Testes", completed: false },
  { currentTask: "Estudar React", completed: false },
  { currentTask: "Estudar PHP", completed: false },
];

const handlingForms = {
  data() {
    return {
      tasks: window.tasks,
      newTask: {},
    };
  },
  method: {
    addTask() {
      if (!this.newTask.currentTask) {
        alert("Preencha a tarefa a ser adicionada!");
        return;
      }
      this.tasks.push(this.newTask);
      this.newTask = {};
    },
    clearTasks() {
      this.tasks = [];
    },
  },
};

Vue.createApp(handlingForms).mount("#app");
