<template>
  <div class="contenedor" style="padding-bottom: 130px">
    <h1>Contadores {{ mensajePorFiltros }}</h1>
    <transition name="slide" appear mode="out-in">
      <p v-if="numTotalElementos === 0" key="mensaje">
        Al parecer no has registrado contadores, intenta <a href="#" class="azul"
                                                            @click.prevent="alMostrarFormularioParaAgregar">
        agregar uno</a>.
      </p>
      <ListadorDeContadores v-else-if="elementosOrdenados.length > 0" key="tabla"/>
      <div v-else key="mensaje-fitros">
        <p>No se encontraron elementos para los <b>filtros</b> aplicados.</p>
        <button class="boton flotante fondo-gris" type="button" @click="alBorrarFiltros">Borrar los filtros</button>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import ListadorDeContadores from "./ListadorDeContadores";

export default {
  name: "ContenedorContadores",
  components: {ListadorDeContadores},
  computed: {
    ...mapGetters('contador', [
      'elementosOrdenados',
      'numTotalElementos',
      'numFiltrosActivos',
    ]),
    mensajePorFiltros() {
      return this.numFiltrosActivos > 0 ? (`filtrados: ${this.elementosOrdenados.length}`) : ""
    }
  },
  methods: {
    ...mapActions('contador', [
      'alMostrarFormularioParaAgregar',
      'alBorrarFiltros',
    ]),
  },
}
</script>
