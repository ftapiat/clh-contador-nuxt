<template>
  <div class="total-contadores texto-centrado">
    <b>Total de contadores: {{ numTotalElementos }}</b><br>
    <b>Suma total de valores: {{ sumaTotalValores }}</b>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SumaDeContadores",
  computed: {
    ...mapGetters('contador', [
      'numTotalElementos',
      'sumaTotalValores',
    ]),
  },
}
</script>

<style scoped>
.total-contadores{
  color: var(--color-sobre-primario);
  display: table-cell;
  vertical-align: middle;
}
</style>
