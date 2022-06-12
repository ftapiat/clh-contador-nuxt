<template>
  <div style="overflow-x: auto; padding: 0" class="tarjeta con-bordes flotante">
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
      <transition-group tag="tbody" name="list" appear>
        <Contador v-for="contador in elementosOrdenados" :key="contador.id" :contador="contador"/>
      </transition-group>
    </table>
  </div>
</template>

<script>

import Contador from "./Contador";
import {mapGetters, mapActions} from "vuex";
import FiltroNombre from "./OrdenarNombre";
import FiltroValor from "./OrdenarValor";

export default {
  name: "ListadorDeContadores",
  components: {Contador, FiltroNombre, FiltroValor},
  computed: {
    ...mapGetters('contador', [
      'elementosOrdenados'
    ]),
  },
  methods: {
    ...mapActions('contador', [
      'alMostrarFormularioParaAgregar',
    ]),
  },
}
</script>
