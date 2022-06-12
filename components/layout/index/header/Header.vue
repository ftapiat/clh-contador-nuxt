<template>
  <header class="header">
    <div class="header-contenido">
      <Logo/>
      <div>
        <BotonAgregarContador/>
        &nbsp;
        <BotonFiltrarContadores/>
      </div>
    </div>
  </header>
</template>

<script>

import BotonAgregarContador from "./BotonAgregarContador";
import BotonFiltrarContadores from "./BotonFiltrarContadores";
import Logo from "./Logo";

export default {
  name: "Header",
  components: {BotonAgregarContador, Logo, BotonFiltrarContadores},
}
</script>

<style scoped>
.header {
  top: 0;
  left: 0;
  min-height: 100px;
  background-color: var(--color-superficie);
  -webkit-box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.1) !important;
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.1) !important;
  -moz-box-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.1) !important;

  padding: 1rem;
  margin-bottom: 20px;
}

.header-contenido {
  display: block;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

@media (min-width: 720px) {
  .header {
    line-height: 100px;
    padding: 0 1rem;
  }

  .header-contenido {
    display: flex;
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

.boton {
  margin: 0.25rem 0;
}

@media (min-width: 360px){
  .boton{
    margin: 0.75rem 0;
  }
}

</style>
