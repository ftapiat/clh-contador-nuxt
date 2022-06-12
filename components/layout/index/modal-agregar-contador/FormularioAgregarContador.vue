<template>
  <ValidationObserver v-slot="{ handleSubmit }" tag="div">
    <form @submit.stop.prevent="handleSubmit(agregar)">
      <ValidationProvider name="nombre" rules="required|max:20" v-slot="{ valid, errors }"
                          style="width: 100%; padding-bottom: 20px;" tag="div" class="grupo-input">
        <span class="rojo-peligro" style="font-size: 0.7rem;">{{ errors[0] }}</span>
        <input type="text" name="nombre" v-model="nombre" placeholder="Nombre del contador" ref="campoNombre"
               style="width: 100%" :class="`${errors.length > 0 ? 'invalido' : ''}`"
               autocomplete="off" id="campoNombre"/>
        <label for="campoNombre">Nombre </label>
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
      this.alAgregarContador(this.nombre);
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
