<template>
  <a href="#" class="enlace">
    <b>Listador de Contadores</b>
  </a>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style scoped>
.enlace {
  text-decoration: none;
  color: var(--color-primario);
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}

.enlace:hover {
  color: var(--color-primario-pulsado);
}

</style>
