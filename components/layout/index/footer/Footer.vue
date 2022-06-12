<template>
  <footer class="footer">
    <SumaDeContadores/>
  </footer>
</template>

<script>
import SumaDeContadores from "./SumaDeContadores";

export default {
  name: "Footer",
  components: {SumaDeContadores}
}
</script>

<style scoped>
.footer {
  position: sticky;
  bottom: 0;
  left: 0;

  width: 100%;
  background-color: var(--color-primario);
  min-height: 100px;
  padding: 20px 0;
  display: table;

  -webkit-box-shadow: 0 -.12rem 7px rgba(0, 0, 0, 0.2) !important;
  box-shadow: 0 -.12rem 7px rgba(0, 0, 0, 0.2) !important;
  -moz-box-shadow: 0 -.12rem 7px rgba(0, 0, 0, 0.2) !important;
}
</style>
