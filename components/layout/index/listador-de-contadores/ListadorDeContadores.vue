<template>
  <div>
    <h1>Listador de Contadores</h1>
    <table v-if="elementosFiltrados.length > 0">
      <thead>
      <tr>
        <th>Nombre
          <FiltroNombre/>
        </th>
        <th>
          Valor
          <FiltroValor/>
        </th>
        <th>Eliminar</th>
      </tr>
      </thead>
      <tbody>
      <Contador v-for="contador in elementosFiltrados" :key="contador.id" :contador="contador"/>
      </tbody>
    </table>
  </div>
</template>

<script>

import Contador from "./Contador";
import {mapGetters, mapActions} from "vuex";
import FiltroNombre from "./FiltroNombre";
import FiltroValor from "./FiltroValor";

export default {
  name: "ListadorDeContadores",
  components: {Contador, FiltroNombre, FiltroValor,},
  computed: {
    ...mapGetters('contador', [
      'puedeRestarContador',
      'puedeSumarContador',
      'elementosFiltrados'
    ]),
  },
  methods: {
    ...mapActions('contador', [
      'alRestarPorId',
      'alSumarPorId',
      'alEliminarPorId',
    ]),
  },
}
</script>

<style scoped>

</style>
