const todos = [
    {
        text: 'Limpar Carro',
        done: true
    },
    {
        text: 'Programar',
        done: false
    }
];

const todosApp = {
    data() {
        return {
            todos: todos,
            newTodo: {
                done:false
            }
        };
    },
    methods: {
        addTodo: function(){
            if(this.newTodo.text){
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done:false
                }
            } else {
                alert('sem tarefas vazias')
            }
        }
    },
};

Vue.createApp(todosApp).mount('#app');