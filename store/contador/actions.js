export default {
  alRestarPorId({commit}, id) {
    commit('restarPorId', id);
  },
  alSumarPorId({commit}, id) {
    commit('sumarPorId', id);
  },
  alEliminarPorId({commit}, id) {
    commit('eliminarPorId', id);
  },
  alMostrarFormularioParaAgregar({commit}) {
    commit('mostrarFormularioParaAgregar');
  },
  alCerrarFormularioParaAgregar({commit}) {
    commit('cerrarFormularioParaAgregar');
  },
  alAgregarContador({commit}, nombre) {
    commit('agregarContador', nombre);
  },
  alPresionarOrdenarNombre({commit}) {
    commit('cambiarOrdenarNombre');
  },
  alPresionarOrdenarValor({commit}) {
    commit('cambiarOrdenarValor');
  },
}
