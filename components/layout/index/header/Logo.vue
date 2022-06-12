<template>
  <div class="logo">
    <a href="#" class="enlace">
      <b>Listador de Contadores</b>
    </a>
  </div>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style scoped>
.logo{
  flex: 1;
}

.enlace {
  text-decoration: none;
  color: var(--color-primario);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.enlace:hover {
  color: var(--color-primario-pulsado);
}

</style>
