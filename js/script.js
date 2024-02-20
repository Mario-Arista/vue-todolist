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
        // Inserire funzioni

    },

}).mount("#app");