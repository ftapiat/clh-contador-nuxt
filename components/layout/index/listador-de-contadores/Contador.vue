<template>
  <tr>
    <td class="texto-nombre">
      {{ contador.nombre }}
    </td>
    <td class="texto-centrado">
      <span class="en-linea">
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
      </span>
    </td>
    <td class="texto-centrado">
      <button @click="() => alEliminarPorId(contador.id)"
              class="boton sin-fondo sin-bordes puntero-en-hover rojo-peligro"
              aria-label="Eliminar">
        <FontAwesomeIcon :icon="iconoEliminar" class="boton-eliminar"/>
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
  padding-left: 2rem;
}

.texto-valor {
  display: inline-block;
  min-width: 20px;
  margin: 0 10px 0 10px;
}

.boton-eliminar {
  font-size: 24px;
}
</style>
