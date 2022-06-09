export default {
    alRestarPorIndice({commit}, index){
        commit('restarPorIndice', index);
    },
    alSumarPorIndice({commit}, index){
        commit('sumarPorIndice', index);
    },
    alEliminarPorIndice({commit}, index){
        commit('eliminarPorIndice', index);
    },
    alMostrarFormularioParaAgregar({commit}){
        commit('mostrarFormularioParaAgregar');
    },
    alCerrarFormularioParaAgregar({commit}){
        commit('cerrarFormularioParaAgregar');
    },
    alAgregarContador({commit}, nombre){
        commit('agregarContador', nombre);
    }
}
