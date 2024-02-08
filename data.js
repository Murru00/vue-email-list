const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Esercizio Email List!',
            List: [],


        };

    },

    methods() { },

    created() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                console.log(response.data.response);
                this.List.push(response.data.response);
            });
        }


    }

})
app.mount('#app');