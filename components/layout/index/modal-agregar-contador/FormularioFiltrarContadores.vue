<template>
  <ValidationObserver v-slot="{ handleSubmit }" tag="div">
    <form @submit.stop.prevent="handleSubmit(filtrar)">
      <h4>Por nombre</h4>
      <ValidationProvider rules="max:20" tag="div" class="grupo-input" v-slot="{ valid, errors }" name="nombre">
        <span class="rojo-peligro" style="font-size: 0.7rem;">{{ errors[0] }}</span>
        <input type="text" id="filtroNombre" name="nombre" v-model="nombre" autocomplete="off"
               :class="`${errors.length > 0 ? 'invalido' : ''}`">
        <label for="filtroNombre">Nombre </label>
      </ValidationProvider>
      <h4>Por valor</h4>
      <div class="grupo-input">
        <select name="tipoValor" id="tipoValor" v-model="tipoValor" autocomplete="off">
          <option v-for="tipo in tiposDeValor" :value="tipo.valor">{{ tipo.texto }}</option>
        </select>
        <label for="tipoValor">Tipo de valor</label>
      </div>
      <ValidationProvider v-if="tipoValor != null" :rules='{ required: tipoValor != null}' tag="div" class="grupo-input"
                          name="cantidad" v-slot="{ valid, errors }">
        <span class="rojo-peligro" style="font-size: 0.7rem;">{{ errors[0] }}</span>
        <input type="number" id="filtroCantidad" name="cantidad" v-model="cantidad" autocomplete="off"
               :class="`${errors.length > 0 ? 'invalido' : ''}`">
        <label for="filtroCantidad">Valor {{ tipoFiltroSeleccionado }} </label>
      </ValidationProvider>
      <div>
        <button type="submit" class="boton flotante fondo-azul">Filtrar</button>
        &nbsp;
        <button type="reset" class="boton flotante fondo-gris" @click="borrarFiltros">Borrar filtros</button>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import {mapActions} from "vuex";
import {ValidationProvider, ValidationObserver} from 'vee-validate';

export default {
  name: "FormularioFiltrarContadores",
  components: {ValidationObserver, ValidationProvider},
  data() {
    return {
      nombre: null,
      tiposDeValor: [
        {
          valor: null,
          texto: "- Ninguno -"
        },
        {
          valor: "<",
          texto: "Menor que"
        },
        {
          valor: ">",
          texto: "Mayor que"
        },
      ],
      tipoValor: null,
      cantidad: null,
    };
  },
  computed: {
    tipoFiltroSeleccionado() {
      return this.tiposDeValor.find(tipo => tipo.valor === this.tipoValor)?.texto.toLowerCase() ?? "";
    }
  },
  methods: {
    borrarFiltros() {
      this.nombre = null;
      this.tipoValor = null;
      this.cantidad = null;
      this.alBorrarFiltros();
    },
    filtrar() {
      this.alFiltrar({
          nombre: this.nombre?.trim() ?? null,
          valor: {
            tipo: this.tipoValor,
            cantidad: this.tipoValor ? this.cantidad?.trim() ?? null : null,
          }
        }
      );
    },
    ...mapActions('contador', [
      'alFiltrar',
      'alBorrarFiltros',
    ]),
  },
  mounted() {
    const filtros = this.$store.state.contador.filtros;
    this.nombre = filtros.nombre;
    this.tipoValor = filtros.valor?.tipo ?? null;
    this.cantidad = filtros.valor?.cantidad ?? null;
  },
}
</script>

<style scoped>
.grupo-input {
  margin-bottom: 20px;
}

h4 {
  margin: 0;
}
</style>
