const {createApp} = Vue;

createApp({
    data() {
        return {

            // Dichiaro nuovo To-Do da aggiungere con input
            newToDo: '',

            // Dichiaro To-Do iniziali
            toDos: [
                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Comprare le Fruittella",
                    done: true,
                },
                {
                    text: "Guardare Mare Fuori",
                    done: false,
                },
            ],

            
        }
    },


    methods: {

        // Fuznione per cancellare todo al click sulla X
        deleteTodo(todoIndex) {
            this.toDos.splice(todoIndex, 1)
        },

        // Funzione per aggiungere nuovo Todo
        addTodo() {
            this.toDos.push({ text: this.newToDo, done: false });

            // Cancello contenuto campo input
            this.newToDo = "";
        },

        // Funzione per "Toggolare" al click il testo del todo
        toggleClick(index) {
            this.toDos[index].done = !this.toDos[index].done;
        },
    },

}).mount("#app");