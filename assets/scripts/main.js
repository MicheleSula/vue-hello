const { createApp } = Vue;

createApp ({
    data() {
        return {
            messaggio: 'VUE hello world!',
            image: 'img/vue-picture.png'
        }
    }
}).mount('#app');