<template>
  <div>
    <transition name="fade" appear>
      <div class="modal" v-if="modalEstaActivo" key="modal" @click="alCerrarModal"/>
    </transition>
    <transition name="pop" appear>
      <div v-if="modalEstaActivo" class="modal-contenido tarjeta flotante con-bordes" @click.stop>
        <button type="button" @click="alCerrarModal" class="boton boton-cerrar fondo-rojo-peligro"
                title="Cerrar">
          &times;
        </button>
        <div style="padding: 0 2rem 2rem;">
          <div v-if="estaAgregandoContador">
            <h2>Registrar contador</h2>
            <FormularioAgregarContador/>
          </div>
          <div v-else-if="estaFiltrandoContadores">
            <h2>Filtrar contadores</h2>
            <FormularioFiltrarContadores/>
          </div>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FormularioAgregarContador from "./FormularioAgregarContador";
import FormularioFiltrarContadores from "./FormularioFiltrarContadores";

export default {
  name: "ModalAgregarContador",
  components: {FormularioFiltrarContadores, FormularioAgregarContador},
  computed: {
    ...mapGetters('contador', [
      'modalEstaActivo',
      'estaAgregandoContador',
      'estaFiltrandoContadores',
    ]),
  },
  methods: {
    ...mapActions('contador', [
      'alCerrarModal',
    ])
  }
}
</script>

<style scoped>
.boton-cerrar {
  float: right;
  margin: -1px;
  color: var(--color-sobre-error);
  font-size: 1.5rem;
  padding: 0.5rem 0.7rem;
  line-height: 0.6;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

.modal-contenido {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: fit-content;
  background-color: #fefefe;
  border: 1px solid #888;
  max-width: calc(100% - 20px);
  padding: 0;
  border-radius: 1rem;
  z-index: 999;
  cursor: default;
  margin: 10vh auto auto;
}

@media (min-width: 720px) {
  .modal-contenido {
    max-width: 70%;
  }
}

@media (min-width: 1080px) {
  .modal-contenido {
    max-width: 50%;
  }
}

</style>
