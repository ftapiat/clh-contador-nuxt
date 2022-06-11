<template>
  <div>
    <div style="min-height: 100vh; margin-bottom: -100px">
      <ModalAgregarContador/>
      <Header/>
      <client-only>
        <ListadorDeContadores/>
      </client-only>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from "~/components/layout/index/header/Header";
import Footer from "~/components/layout/index/footer/Footer";
import ListadorDeContadores from "~/components/layout/index/listador-de-contadores/ListadorDeContadores";
import ModalAgregarContador from "~/components/layout/index/modal-agregar-contador/ModalAgregarContador";

export default {
  name: 'IndexPage',
  components: {Header, Footer, ListadorDeContadores, ModalAgregarContador},
}
</script>
