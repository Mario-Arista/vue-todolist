const {createApp} = Vue;

createApp({
    data() {
        return {

            // Dichiaro nuovo To Do vuoto
            newToDo: '',

            // Dichiaro ToDO, come insieme di oggetti
            todo: [
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