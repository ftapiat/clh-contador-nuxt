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
  alMostrarFormularioParaFiltrar({commit}) {
    commit('mostrarFormularioParaFiltrar');
  },
  alCerrarModal({commit}) {
    commit('cerrarModal');
  },
  alAgregarContador({commit}, nombre) {
    commit('agregarContador', nombre);
  },
  alFiltrar({commit}, {nombre, valor}) {
    commit('filtrar', {nombre, valor});
  },
  alBorrarFiltros({commit}) {
    commit('borrarFiltros');
  },
  alPresionarOrdenarNombre({commit}) {
    commit('cambiarOrdenarNombre');
  },
  alPresionarOrdenarValor({commit}) {
    commit('cambiarOrdenarValor');
  },
}
