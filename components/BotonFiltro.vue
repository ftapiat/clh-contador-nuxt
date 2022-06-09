<template>
  <button @click="() => $emit('click')">
    <FontAwesomeIcon :icon="icono"/>
  </button>
</template>

<script>

import {fas} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "BotonFiltro",
  props: [
    "filtroActual"
  ],
  computed: {
    icono() {
      switch (this.filtroActual) {
        case null:
        default:
          return fas.faSort;
        case "ASC":
          return fas.faSortDown;
        case "DESC":
          return fas.faSortUp;
      }
    },
  }
}
</script>

<style scoped>

</style>
