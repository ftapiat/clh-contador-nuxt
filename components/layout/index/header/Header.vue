<template>
  <div>
    <BotonAgregarContador />
    <OrdenarContadores/>
    <FiltrarContadores/>
  </div>
</template>

<script>

import BotonAgregarContador from "./BotonAgregarContador";
import OrdenarContadores from "./OrdenarContadores";
import FiltrarContadores from "./FiltrarContadores";

export default {
  name: "Header",
  components: {BotonAgregarContador, OrdenarContadores, FiltrarContadores},
}
</script>

<style scoped>

</style>
