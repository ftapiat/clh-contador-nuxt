<template>
  <tr>
    <td>
      <span class="texto-nombre">{{ contador.nombre }}</span>
    </td>
    <td class="texto-centrado">
      <button @click="() => alRestarPorId(contador.id)" :disabled="!puedeRestarContador(contador.id)"
              class="boton sin-fondo sin-bordes puntero-en-hover rojo-peligro"
              aria-label="Disminuir valor contador">
        <FontAwesomeIcon :icon="iconoRestar"/>
      </button>
      <span class="texto-valor">{{ contador.valor }}</span>
      <button @click="() => alSumarPorId(contador.id)" :disabled="!puedeSumarContador(contador.id)"
              class="boton sin-fondo sin-bordes puntero-en-hover azul"
              aria-label="Aumentar valor contador">
        <FontAwesomeIcon :icon="iconoSumar"/>
      </button>
    </td>
    <td class="texto-centrado">
      <button @click="() => alEliminarPorId(contador.id)" class="boton sin-fondo sin-bordes puntero-en-hover"
              aria-label="Eliminar">
      <FontAwesomeIcon :icon="iconoEliminar" class="rojo-peligro boton-eliminar"/>
      </button>
    </td>
  </tr>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import {fas} from "@fortawesome/free-solid-svg-icons";

export default {
  name: "Contador",
  props: {
    "contador": Object,
  },
  computed: {
    ...mapGetters('contador', [
      'puedeRestarContador',
      'puedeSumarContador',
      'elementosOrdenados'
    ]),
    iconoRestar: () => fas.faMinus,
    iconoSumar: () => fas.faPlus,
    iconoEliminar: () => fas.faTrashAlt,
  },
  methods: {
    ...mapActions('contador', [
      'alRestarPorId',
      'alSumarPorId',
      'alEliminarPorId',
    ]),
  },
}
</script>

<style scoped>
.texto-nombre {
  display: inline-block;
  min-width: 150px;
}

.texto-valor {
  display: inline-block;
  min-width: 20px;
  margin: 0 10px 0 10px;
}

.boton-eliminar{
  font-size: 24px;
}
</style>
