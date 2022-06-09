const valorMinimoContador = 0;
const valorMaximoContador = 20;
const cantidadMaximaContadores = 20;

export default {
    numElementos(state){
        return state.items.length;
    },
    puedeAgregarContador(state){
        return state.items.length < cantidadMaximaContadores;
    },
    puedeRestarContador: (state) => (index) => {
        if (typeof state.items[index] === "undefined") return false;
        return state.items[index].valor > valorMinimoContador;
    },
    puedeSumarContador: (state) => (index) => {
        if (typeof state.items[index] === "undefined") return false;
        return state.items[index].valor < valorMaximoContador;
    },
    estaAgregandoContador(state){
        return state.agregandoContador;
    }
}
