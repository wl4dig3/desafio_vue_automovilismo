<template>
<div class="home">

    <h1>This is Vue Framework Portada</h1>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Portada',
    components: {
        HelloWorld
    }
}
</script>

<style scoped>
.home {
    background: blueviolet;
    background-image: url("../assets/img/vue.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
}
</style>
