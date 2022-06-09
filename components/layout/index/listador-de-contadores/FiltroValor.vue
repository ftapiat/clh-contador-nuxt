<template>
  <BotonFiltro @click="alPresionarFiltroValor" :filtro-actual="filtro"/>
</template>

<script>

import {mapActions} from "vuex";
import BotonFiltro from "~/components/BotonFiltro";

export default {
  name: "FiltroNombre",
  components: {BotonFiltro},
  computed: {
    filtro() {
      return this.$store.state.contador.filtroValor;
    },
  },
  methods: {
    ...mapActions('contador', [
      'alPresionarFiltroValor',
    ]),
  },
}
</script>

<style scoped>

</style>
