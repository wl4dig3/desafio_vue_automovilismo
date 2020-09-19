<template>
<div>
    <h1 v-text="tituloEntrada">Titulo Entrada</h1>
    <h1>Pagina Sobre mi</h1>
    <router-link :to=" paginar(false)">Anterior</router-link>|
    <router-link :to="paginar(true)">Siguiente</router-link>
</div>
</template>

<script>
export default {
    methods: {
        paginar(siguiente) {
            let entrada = parseInt(this.$route.params.entrada);

            if (siguiente)
                return entrada < 10 ? `/sobremi/${entrada + 1}` : `/sobremi/${entrada}`
            else
                return entrada > 1 ? `/sobremi/${entrada - 1}` : `/sobremi/${entrada}`

        }

    },
    computed: {
        tituloEntrada() {
            return `Entrada ${this.$route.params.entrada} del Blog`
        }

    },
}
</script>
