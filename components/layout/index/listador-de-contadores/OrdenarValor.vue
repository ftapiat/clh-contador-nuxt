<template>
  <BotonOrdenar @click="alPresionarOrdenarValor" :orden-actual="orden"/>
</template>

<script>

import {mapActions} from "vuex";
import BotonOrdenar from "~/components/BotonOrdenar";

export default {
  name: "OrdenarNombre",
  components: {BotonOrdenar},
  computed: {
    orden() {
      return this.$store.state.contador.orden.valor;
    },
  },
  methods: {
    ...mapActions('contador', [
      'alPresionarOrdenarValor',
    ]),
  },
}
</script>

<style scoped>

</style>
