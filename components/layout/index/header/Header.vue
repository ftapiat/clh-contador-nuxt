<template>
  <div>
    <BotonAgregarContador />
    <FiltrarContadores/>
  </div>
</template>

<script>

import BotonAgregarContador from "./BotonAgregarContador";
import FiltrarContadores from "./FiltrarContadores";

export default {
  name: "Header",
  components: {BotonAgregarContador, FiltrarContadores},
}
</script>

<style scoped>

</style>
