<template>
  <button @click="alMostrarFormularioParaAgregar" :disabled="!puedeAgregarContador"
  class="boton fondo-azul flotante" aria-label="Agregar Contador" style="margin-right: auto" type="button">
    <FontAwesomeIcon :icon="iconoSumar"/> Agregar
  </button>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {fas} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BotonAgregarContador",
  computed: {
    ...mapGetters('contador', [
      'puedeAgregarContador',
    ]),
    iconoSumar: () => fas.faPlus,
  },
  methods: {
    ...mapActions('contador', [
      'alMostrarFormularioParaAgregar',
    ]),
  },
}
</script>

