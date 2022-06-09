<template>
  <table>
    <tbody>
    <tr>
      <td><input type="text" :value="contador.nombre" disabled></td>
      <td>
        <button @click="alRestar" :disabled="!puedeRestar">-</button>
      </td>
      <td><input type="text" :value="contador.valor" style="width: 20px" disabled></td>
      <td><button @click="alSumar" :disabled="!puedeSumar">+</button></td>
      <td>
        <button @click="alEliminar">Eliminar</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Contador",
  props: {
    "contador": Object,
    "alRestar": Function,
    "alSumar": Function,
    "alEliminar": Function,
    "puedeRestar": Boolean,
    "puedeSumar": Boolean,
  }
}
</script>

<style scoped>

</style>
