<template>
  <div>
    <h1>Listador de Contadores</h1>
    <table v-if="elementosOrdenados.length > 0" class="tarjeta tabla flotante con-bordes">
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
      <Contador v-for="contador in elementosOrdenados" :key="contador.id" :contador="contador"/>
      </tbody>
    </table>
  </div>
</template>

<script>

import Contador from "./Contador";
import {mapGetters, mapActions} from "vuex";
import FiltroNombre from "./OrdenarNombre";
import FiltroValor from "./OrdenarValor";

export default {
  name: "ListadorDeContadores",
  components: {Contador, FiltroNombre, FiltroValor,},
  computed: {
    ...mapGetters('contador', [
      'puedeRestarContador',
      'puedeSumarContador',
      'elementosOrdenados'
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
.tabla th{
  padding: 0 20px 10px;
}

.tabla td{
  padding-bottom: 250px;
}
</style>
