<template>
  <div>
    <div style="min-height: 100vh; margin-bottom: -100px">
      <ModalAgregarContador/>
      <Header/>
      <Nuxt/>
    </div>
    <transition name="from-left" appear>
      <client-only>
        <Footer/>
      </client-only>
    </transition>
  </div>
</template>

<script>

import Header from "~/components/layout/index/header/Header";
import Footer from "~/components/layout/index/footer/Footer";
import ModalAgregarContador from "~/components/layout/index/modal-agregar-contador/ModalAgregarContador";

export default {
  name: "default.vue",
  components: {Header, Footer, ModalAgregarContador},
}
</script>

