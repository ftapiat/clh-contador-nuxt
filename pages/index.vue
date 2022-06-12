<template>
  <transition name="fade" appear>
    <client-only>
      <ContenedorContadores/>
    </client-only>
  </transition>
</template>

<script>

import ContenedorContadores from "~/components/layout/index/listador-de-contadores/ContenedorContadores";

export default {
  name: 'IndexPage',
  components: {ContenedorContadores},
}
</script>
