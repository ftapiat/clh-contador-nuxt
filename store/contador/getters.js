import {ContadorModel} from "~/src/models/ContadorModel";

const valorMinimoContador = 0;
const valorMaximoContador = 20;
const cantidadMaximaContadores = 20;

export default {
  numTotalElementos(state) {
    return state.items.length;
  },
  elementosFiltrados(state) {
    const filtroNombre = state.filtroNombre;
    const filtroValor = state.filtroValor;
    const items = [...state.items];
    return items.sort((a, b) => {
      let ordenNombre = 0;
      let ordenValor = 0;

      if (filtroNombre === "ASC") {
        ordenNombre = (a.nombre > b.nombre) ? 1 : (a.nombre < b.nombre) ? -1 : 0;
      } else if (filtroNombre === "DESC") {
        ordenNombre = (a.nombre < b.nombre) ? 1 : (a.nombre > b.nombre) ? -1 : 0;
      }

      if (filtroValor === "ASC") {
        ordenValor = (a.valor > b.valor) ? 1 : (a.valor < b.valor) ? -1 : 0;
      } else if (filtroNombre === "DESC") {
        ordenValor = (a.valor < b.valor) ? 1 : (a.valor > b.valor) ? -1 : 0;
      }

      return ordenNombre + ordenValor;
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
