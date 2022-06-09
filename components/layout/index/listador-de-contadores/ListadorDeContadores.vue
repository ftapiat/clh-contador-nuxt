<template>
  <div>
    <h1>Listador de Contadores</h1>
    <Contador v-for="(contador, index) in contadores"
              :key="index"
              :contador="contador"
              :puede-restar="puedeRestarContador(index)"
              :puede-sumar="puedeSumarContador(index)"
              :al-restar="() => alRestarPorIndice(index)"
              :al-sumar="() => alSumarPorIndice(index)"
              :al-eliminar="() => alEliminarPorIndice(index)"
    />
  </div>
</template>

<script>

import Contador from "./Contador";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "ListadorDeContadores",
  components: {Contador},
  computed: {
    contadores() {
      return this.$store.state.contador.items
    },
    ...mapGetters('contador', [
      'puedeRestarContador',
      'puedeSumarContador',
    ]),
  },
  methods: {
    ...mapActions('contador', [
      'alRestarPorIndice',
      'alSumarPorIndice',
      'alEliminarPorIndice',
    ]),
  },
}
</script>

<style scoped>

</style>
