import {ContadorModel} from "~/src/models/ContadorModel";

const obtieneElSiguienteFiltro = (filtroActual) => {
  const filtros = [null, 'ASC', 'DESC'];
  return filtros[filtros.indexOf(filtroActual) + 1] ?? filtros[0];
}

export default {
  hidratarEstadoDesdeElStorage(state) {
    const estadoDesdeElStorage = localStorage.getItem("contador-items");
    if (estadoDesdeElStorage) {
      state.items = JSON.parse(estadoDesdeElStorage).map((object) => new ContadorModel(object));
    }
  },
  restarPorId(state, id) {
    state.items.find(contador => contador.id === id).valor--;
  },
  sumarPorId(state, id) {
    state.items.find(contador => contador.id === id).valor++;
  },
  eliminarPorId(state, id) {
    state.items = state.items.filter((contador) => contador.id !== id);
  },
  mostrarFormularioParaAgregar(state) {
    state.agregandoContador = true;
  },
  cerrarFormularioParaAgregar(state) {
    state.agregandoContador = false;
  },
  agregarContador(state, nombre) {
    state.items.push(new ContadorModel({nombre, valor: 0}));
    state.agregandoContador = false;
  },
  cambiarFiltroNombre(state) {
    state.filtroNombre = obtieneElSiguienteFiltro(state.filtroNombre);
  },
  cambiarFiltroValor(state) {
    state.filtroValor = obtieneElSiguienteFiltro(state.filtroValor);
  }
}
