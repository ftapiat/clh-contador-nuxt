<template>
  <BotonFiltro @click="alPresionarFiltroNombre" :filtro-actual="filtro"/>
</template>

<script>

import {mapActions} from "vuex";
import BotonFiltro from "~/components/BotonFiltro";

export default {
  name: "FiltroNombre",
  components: {BotonFiltro},
  computed: {
    filtro() {
      return this.$store.state.contador.filtroNombre;
    },
  },
  methods: {
    ...mapActions('contador', [
      'alPresionarFiltroNombre',
    ]),
  },
}
</script>

<style scoped>

</style>
