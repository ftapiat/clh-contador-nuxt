<template>
  <form @submit.prevent="(event) => alAgregarContador(event.target.elements.nombre.value)">
    <table>
      <tbody>
      <tr>
        <td>
          <input type="text" name="nombre" placeholder="Nombre del contador" ref="campoNombre"
                 required maxlength="20"
          >
        </td>
        <td>
          <button type="submit">Agregar</button>
        </td>
        <td>
          <button type="button" @click="alCerrarFormularioParaAgregar">Cancelar</button>
        </td>
      </tr>
      </tbody>
    </table>
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "FormularioAgregarContador",
  methods: {
    async enfocarCampoNombre() {
      await this.$refs.campoNombre.focus();
    },
    ...mapActions('contador', [
      'alCerrarFormularioParaAgregar',
      'alAgregarContador',
    ]),
  },
  mounted() {
    this.enfocarCampoNombre();
  }
}
</script>

<style scoped>

</style>