<template>
  <header class="header">
    <div class="header-contenido">
      <Logo/>
      <div style="justify-content: flex-end!important;">
        <FiltrarContadores/>
        <BotonAgregarContador/>
      </div>
    </div>
  </header>
</template>

<script>

import BotonAgregarContador from "./BotonAgregarContador";
import FiltrarContadores from "./FiltrarContadores";
import Logo from "./Logo";

export default {
  name: "Header",
  components: {BotonAgregarContador, FiltrarContadores, Logo},
}
</script>

<style scoped>
.header {
  top: 0;
  left: 0;

  height: 100px;
  line-height: 100px;

  background-color: var(--color-superficie);
  -webkit-box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.1) !important;
  -moz-box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.1) !important;

  padding: 0 1rem;
  margin-bottom: 20px;
}

.header-contenido {
  position: relative;
  display: flex !important;
  flex-wrap: nowrap;
  justify-content: space-between;

  padding-left: calc(1.5rem * .5);
  padding-right: calc(1.5rem * .5);
}

@media (min-width: 720px) {
  .header-contenido {
    padding-left: 5vw;
    padding-right: 5vw;
  }
}

@media (min-width: 1080px) {
  .header-contenido {
    padding-left: 10vw;
    padding-right: 10vw;
  }
}

</style>
