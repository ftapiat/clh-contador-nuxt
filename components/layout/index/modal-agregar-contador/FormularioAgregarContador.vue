<template>
  <ValidationObserver v-slot="{ handleSubmit }" tag="div">
    <form @submit.stop.prevent="handleSubmit(agregar)">
      <ValidationProvider rules="required|max:20" tag="div" class="grupo-input" v-slot="{ valid, errors }" name="nombre">
        <span class="rojo-peligro" style="font-size: 0.7rem;">{{ errors[0] }}</span>
        <input type="text" id="campoNombre" name="nombre" v-model="nombre" autocomplete="off" ref="campoNombre"
               :class="`${errors.length > 0 ? 'invalido' : ''}`">
        <label for="campoNombre">Nombre del contador </label>
      </ValidationProvider>
      <div>
        <button type="submit" class="boton flotante fondo-azul">Agregar</button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import {mapActions} from "vuex";

import {ValidationProvider, ValidationObserver} from 'vee-validate';

export default {
  name: "FormularioAgregarContador",
  components: {ValidationObserver, ValidationProvider},
  data() {
    return {
      nombre: null,
    };
  },
  methods: {
    async enfocarCampoNombre() {
      await this.$refs.campoNombre.focus();
    },
    ...mapActions('contador', [
      'alAgregarContador',
    ]),
    agregar() {
      this.alAgregarContador(this.nombre.trim());
      this.nombre = null;
    }
  },
  mounted() {
    this.enfocarCampoNombre();
  }
}
</script>

<style scoped>

</style>
