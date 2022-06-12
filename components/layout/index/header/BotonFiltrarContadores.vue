<template>
  <button  @click="alMostrarFormularioParaFiltrar" class="boton flotante fondo-gris" type="button" title="Filtrar contadores" style="border: 1px solid #cbcbcb;">
    <FontAwesomeIcon :icon="iconoFiltrar"/> Filtrar ({{numFiltrosActivos}})
  </button>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {faFilter} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BotonFiltrarContadores",
  computed: {
    ...mapGetters('contador', [
      'puedeAgregarContador',
      'numFiltrosActivos',
    ]),
    iconoFiltrar: () => faFilter,
  },
  methods: {
    ...mapActions('contador', [
      'alMostrarFormularioParaFiltrar',
    ]),
  },
}
</script>

<style scoped>

</style>
