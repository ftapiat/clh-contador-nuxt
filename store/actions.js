export default {
  iniciarAlmacen({commit}) {
    commit('contador/cargarValoresDesdeLosStorage');
  },
}
