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
  elementosOrdenados(state) {
    const ordenNombre = state.orden.nombre;
    const ordenValor = state.orden.valor;
    let items = [...state.items]; // Clona el estado para no modificarlo erróneamente

    // Aplica filtros
    items = filtrarContadores(items, state.filtros);

    // Ordena
    return items.sort((a, b) => {
      let puntajeNombre = 0;
      let puntajeValor = 0;

      if (ordenNombre) {
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
