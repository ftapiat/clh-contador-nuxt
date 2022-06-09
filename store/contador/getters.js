const valorMinimoContador = 0;
const valorMaximoContador = 20;
const cantidadMaximaContadores = 20;

export default {
  numTotalElementos(state) {
    return state.items.length;
  },
  elementosOrdenados(state) {
    const ordenNombre = state.orden.nombre;
    const ordenValor = state.orden.valor;
    const items = [...state.items]; // Clona el estado para no modificarlo erróneamente con Sort
    return items.sort((a, b) => {
      let puntajeNombre = 0;
      let puntajeValor = 0;

      if (ordenNombre){
        const nombreA = a.nombre.toLowerCase();
        const nombreB = b.nombre.toLowerCase();
        if (ordenNombre === "ASC") {
          puntajeNombre = (nombreA > nombreB) ? 1 : (nombreA < nombreB) ? -1 : 0;
        } else {
          puntajeValor = (nombreA < nombreB) ? 1 : (nombreA > nombreB) ? -1 : 0;
        }
      }

      if (ordenValor === "ASC") {
        puntajeValor = (a.valor > b.valor) ? 1 : (a.valor < b.valor) ? -1 : 0;
      } else if (ordenValor === "DESC") {
        puntajeValor = (a.valor < b.valor) ? 1 : (a.valor > b.valor) ? -1 : 0;
      }

      return puntajeNombre + puntajeValor;
    });
  },
  puedeAgregarContador(state) {
    return state.items.length < cantidadMaximaContadores;
  },
  puedeRestarContador: (state) => (id) => {
    return state.items.find(contador => contador.id === id)?.valor > valorMinimoContador;
  },
  puedeSumarContador: (state) => (id) => {
    return state.items.find(contador => contador.id === id)?.valor < valorMaximoContador;
  },
  estaAgregandoContador(state) {
    return state.agregandoContador;
  },
}
