<template>
  <tr>
    <td><input type="text" :value="contador.nombre" disabled></td>
    <td>
      <button @click="() => alRestarPorId(contador.id)" :disabled="!puedeRestarContador(contador.id)">-</button>
      <input type="text" :value="contador.valor" style="width: 20px" disabled>
      <button @click="() => alSumarPorId(contador.id)" :disabled="!puedeSumarContador(contador.id)">+</button>
    </td>
    <td>
      <button @click="() => alEliminarPorId(contador.id)">Eliminar</button>
    </td>
  </tr>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "Contador",
  props: {
    "contador": Object,
  },
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

</style>
