<template>
  <div class="contenedor" style="margin-bottom: 130px">
    <h1>Contadores</h1>
    <div v-if="elementosOrdenados.length > 0" style="overflow-x: auto; padding: 0" class="tarjeta con-bordes flotante">
      <table class="tabla">
        <thead>
        <tr>
          <th style="text-align: left">
            <span class="en-linea">
              Nombre
              <FiltroNombre/>
            </span>
          </th>
          <th>
            <span class="en-linea">
              Valor
              <FiltroValor/>
            </span>
          </th>
          <th>Eliminar</th>
        </tr>
        </thead>
        <tbody>
        <Contador v-for="contador in elementosOrdenados" :key="contador.id" :contador="contador"/>
        </tbody>
      </table>
    </div>
    <span v-else>
      Al parecer no has registrado contadores, intenta <a href="#" style="text-decoration: none !important;"
                                                          @click.prevent="alMostrarFormularioParaAgregar">agregar uno</a>.
    </span>
  </div>
</template>

<script>

import Contador from "./Contador";
import {mapGetters, mapActions} from "vuex";
import FiltroNombre from "./OrdenarNombre";
import FiltroValor from "./OrdenarValor";

export default {
  name: "ListadorDeContadores",
  components: {Contador, FiltroNombre, FiltroValor,},
  computed: {
    ...mapGetters('contador', [
      'puedeRestarContador',
      'puedeSumarContador',
      'elementosOrdenados'
    ]),
  },
  methods: {
    ...mapActions('contador', [
      'alRestarPorId',
      'alSumarPorId',
      'alEliminarPorId',
      'alMostrarFormularioParaAgregar',
    ]),
  },
}
</script>
