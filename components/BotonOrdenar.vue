<template>
  <button @click="() => $emit('click')" class="boton sin-fondo sin-bordes puntero-en-hover"
          :aria-label="label"
  >
    <FontAwesomeIcon :icon="icono" class="azul"/>
  </button>
</template>

<script>

import {fas} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BotonOrdenar",
  props: [
    "ordenActual"
  ],
  computed: {
    icono() {
      switch (this.ordenActual) {
        case null:
        default:
          return fas.faSort;
        case "ASC":
          return fas.faSortDown;
        case "DESC":
          return fas.faSortUp;
      }
    },
    label(){
      switch (this.ordenActual) {
        case null:
        default:
          return "Ordenar";
        case "ASC":
          return "Orden Ascendente";
        case "DESC":
          return "Orden Descendente";
      }
    }
  }
}
</script>

<style scoped>
.boton:hover {
  cursor: pointer;
}
</style>
