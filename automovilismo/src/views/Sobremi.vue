<template>
<div class="sobremi">
    <h1 v-text="tituloEntrada">Titulo Entrada</h1>
    <h2>Pagina Sobre mi</h2>
    <router-link :to=" paginar(false)">Anterior</router-link>|
    <router-link :to="paginar(true)">Siguiente</router-link>
    <br />
    <router-link :to="{name:'comentarios'}">Comentarios</router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    methods: {
        paginar(siguiente) {
            let entrada = parseInt(this.$route.params.entrada);

            if (siguiente)
                return entrada < 10 ? `/sobremi/${entrada + 1}` : `/sobremi/${entrada}`;
            else
                return entrada > 1 ? `/sobremi/${entrada - 1}` : `/sobremi/${entrada}`;
        },
    },
    computed: {
        tituloEntrada() {
            return `Entrada ${this.$route.params.entrada} del Blog`;
        },
    },
};
</script>

<style scoped>
.sobremi {
    background: blueviolet;
    background-image: url("../assets/img/sobremi.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 30rem;
}

a {
    font-size: 1.6em;
}

h1,
h2 {
    font-size: 2em;
    padding-top: 2rem;

}
</style>
