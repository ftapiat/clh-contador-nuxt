<template>
  <div class="modal" v-if="estaAgregandoContador" key="modal">
    <div class="modal-contenido">
      <FormularioAgregarContador/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import FormularioAgregarContador from "./FormularioAgregarContador";

export default {
  name: "ModalAgregarContador",
  components: {FormularioAgregarContador},
  computed: {
    ...mapGetters('contador', [
      'estaAgregandoContador',
    ]),
  },
}
</script>

<style scoped>
.modal {
  display: block; /* "none" invisible, "block" invisible */
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
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>
