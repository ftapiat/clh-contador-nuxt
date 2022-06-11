<template>
  <BotonOrdenar @click="alPresionarOrdenarNombre" :orden-actual="orden"/>
</template>

<script>

import {mapActions} from "vuex";
import BotonOrdenar from "~/components/BotonOrdenar";

export default {
  name: "OrdenarNombre",
  components: {BotonOrdenar},
  computed: {
    orden() {
      return this.$store.state.contador.orden.nombre;
    },
  },
  methods: {
    ...mapActions('contador', [
      'alPresionarOrdenarNombre',
    ]),
  },
}
</script>
