<template>
  <button @click="alMostrarFormularioParaAgregar" :disabled="!puedeAgregarContador">Agregar</button>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BotonAgregarContador",
  computed: {
    ...mapGetters('contador', [
      'puedeAgregarContador',
    ]),
  },
  methods: {
    ...mapActions('contador', [
      'alMostrarFormularioParaAgregar',
    ]),
  },
}
</script>

<style scoped>

</style>