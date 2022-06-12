const valorMinimoContador = 0;
const valorMaximoContador = 20;
const cantidadMaximaContadores = 20;

const filtrarContadores = (contadores, filtros) => {
  if (filtros.nombre) {
    contadores = contadores.filter(item => item.nombre.includes(filtros.nombre));
  }

  if (filtros.valor?.tipo === '<') {
    contadores = contadores.filter(item => item.valor < filtros.valor.cantidad);
  } else if (filtros.valor?.tipo === '>') {
    contadores = contadores.filter(item => item.valor > filtros.valor.cantidad);
  }

  return contadores;
}

export default {
  numTotalElementos(state) {
    return state.items.length;
  },
  sumaTotalValores(state){
    return state.items.reduce((total, item) => total + item.valor, 0);
  },
  elementosOrdenados(state) {
    const ordenNombre = state.orden.nombre;
    const ordenValor = state.orden.valor;
    let items = [...state.items]; // Clona el estado para no modificarlo directamente

    // Aplica filtros
    items = filtrarContadores(items, state.filtros);

    // Ordena por nombre o por valor, si es establecido
    if (ordenNombre){
      items.sort((a, b) => {
        const nombreA = a.nombre.toLowerCase();
        const nombreB = b.nombre.toLowerCase();
        if (ordenNombre === "ASC") {
          return (nombreA > nombreB) ? 1 : (nombreA < nombreB) ? -1 : 0;
        } else {
          return (nombreA < nombreB) ? 1 : (nombreA > nombreB) ? -1 : 0;
        }
      });
    } else if (ordenValor){
      items.sort((a, b) => {
        if (ordenValor === "ASC") {
          return a.valor - b.valor;
        } else {
          return b.valor - a.valor;
        }
      });
    }

    return items;
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
    return state.modoModal === "agregar";
  },
  estaFiltrandoContadores(state) {
    return state.modoModal === "filtrar";
  },
  modalEstaActivo(state) {
    return state.modoModal !== null;
  },
  numFiltrosActivos(state) {
    let numFiltros = 0;
    if (state.filtros.nombre) numFiltros++;
    if (state.filtros.valor.tipo) numFiltros++;
    return numFiltros;
  }
}
