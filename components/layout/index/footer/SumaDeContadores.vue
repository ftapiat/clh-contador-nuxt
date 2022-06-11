<template>
  <div class="total-contadores texto-centrado">
    <b>Total de contadores: {{ numTotalElementos }}</b>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SumaDeContadores",
  computed: {
    ...mapGetters('contador', [
      'numTotalElementos',
    ]),
  },
}
</script>

<style scoped>
.total-contadores{
  color: var(--color-sobre-primario);
}
</style>
