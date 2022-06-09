<template>
  <span>Total de contadores: ({{ numElementos }})</span>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "SumaDeContadores",
  computed: {
    ...mapGetters('contador', [
      'numElementos',
    ]),
  },
}
</script>

<style scoped>

</style>
