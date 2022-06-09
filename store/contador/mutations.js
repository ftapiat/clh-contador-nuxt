import {ContadorModel} from "~/src/models/ContadorModel";

export default {
    hidratarEstadoDesdeElStorage(state) {
        const estadoDesdeElStorage = localStorage.getItem("contador-items");
        if (estadoDesdeElStorage) {
            state.items = JSON.parse(estadoDesdeElStorage).map((object) => new ContadorModel(object));
        }
    },
    restarPorIndice(state, index){
        state.items[index].valor--;
    },
    sumarPorIndice(state, index){
        state.items[index].valor++;
    },
    eliminarPorIndice(state, index){
        state.items.splice(index, 1);
    },
    mostrarFormularioParaAgregar(state){
        state.agregandoContador = true;
    },
    cerrarFormularioParaAgregar(state){
        state.agregandoContador = false;
    },
    agregarContador(state, nombre){
        state.items.push(new ContadorModel({nombre, valor: 0}));
        state.agregandoContador = false;
    }
}
