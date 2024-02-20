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
    },

}).mount("#app");