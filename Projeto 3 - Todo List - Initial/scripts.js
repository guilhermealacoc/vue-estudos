const handlingForms = {
  data() {
    return {
      tasks: [],
      newTask: {
        completed: false,
      },
    };
  },
  methods: {
    addTask: function () {
      if (!this.newTask.currentTask) {
        alert("Preencha a tarefa a ser adicionada!");
        return;
      }
      this.tasks.push(this.newTask);
      this.newTask = {
        completed: false,
      };
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
  },
};

Vue.createApp(handlingForms).mount("#app");
