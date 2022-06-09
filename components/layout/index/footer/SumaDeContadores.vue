<template>
  <span>Total de contadores: ({{ numTotalElementos }})</span>
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

</style>
