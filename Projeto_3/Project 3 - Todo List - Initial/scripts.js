const todosApp = {
  data() {
    return {
      todos: [],
      newTodo: {
        done: false,
      },
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = {
          done: false,
        };
        localStorage.setItem("todos", JSON.stringify(this.todos));
      } else {
        alert("sem tarefas vazias");
      }
    },
    storeTodos() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  created() {
    this.todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : this.todos;
  },
  // SOLUCAO PARA EVITAR USAR O METODO storeTodos EM VARIOS LUGARES
  //   updated() {
  //     localStorage.setItem("todos", JSON.stringify(this.todos));
  //   },
};

Vue.createApp(todosApp).mount("#app");
