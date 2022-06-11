<template>
  <div class="modal" v-if="estaAgregandoContador" key="modal">
    <div class="modal-contenido tarjeta flotante con-bordes">
      <button type="button" @click="alCerrarFormularioParaAgregar" class="boton boton-cerrar" title="Cerrar">
        &times;
      </button>
      <div style="padding: 0 2rem 2rem;">
        <h2>Registrar contador</h2>
        <FormularioAgregarContador/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FormularioAgregarContador from "./FormularioAgregarContador";

export default {
  name: "ModalAgregarContador",
  components: {FormularioAgregarContador},
  computed: {
    ...mapGetters('contador', [
      'estaAgregandoContador',
    ]),
  },
  methods: {
    ...mapActions('contador', [
      'alCerrarFormularioParaAgregar',
    ])
  }
}
</script>

<style scoped>
.boton-cerrar {
  background-color: var(--color-error);
  float: right;
  margin: -1px;
  color: var(--color-sobre-error);
  font-size: 1.5rem;
  padding: 0.5rem 0.7rem;
  line-height: 0.6;
}

.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-contenido {
  background-color: #fefefe;
  margin: 30vh 20px;
  border: 1px solid #888;
  max-width: 100%;
  padding: 0;
}

@media (min-width: 720px) {
  .modal-contenido {
    max-width: 70%;
    margin-left: auto;
    margin-right: auto;
  }
}

@media (min-width: 1080px) {
  .modal-contenido {
    max-width: 50%;
  }
}
</style>
