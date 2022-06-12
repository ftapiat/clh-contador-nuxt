import {ContadorModel} from "~/src/models/ContadorModel";
import {llaves} from "~/src/config/llaves";

const obtieneElSiguienteOrden = (ordenActual) => {
  const ordenDisponibles = [null, 'ASC', 'DESC'];
  return ordenDisponibles[ordenDisponibles.indexOf(ordenActual) + 1] ?? ordenDisponibles[0];
}

const obtieneObjetoDeSesion = (key) => {
  const sessionObjeto = sessionStorage.getItem(key);
  return sessionObjeto ? JSON.parse(sessionObjeto) : undefined;
}

export default {
  cargarValoresDesdeLosStorage(state) {
    const storageItems = localStorage.getItem(llaves.items);
    let items;
    if (storageItems) {
      items = JSON.parse(storageItems).map((object) => new ContadorModel(object));
    }

    const orden = obtieneObjetoDeSesion(llaves.orden);
    const filtros = obtieneObjetoDeSesion(llaves.filtros);

    state = Object.assign(state, {
      items: items ?? state.items,
      orden: orden ?? state.orden,
      filtros: filtros ?? state.filtros,
    })
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
    state.modoModal = "agregar";
  },
  mostrarFormularioParaFiltrar(state) {
    state.modoModal = "filtrar";
  },
  cerrarModal(state) {
    state.modoModal = null;
  },
  agregarContador(state, nombre) {
    state.items.push(new ContadorModel({nombre, valor: 0}));
    state.modoModal = null;
  },
  filtrar(state, {nombre, valor}) {
    state.filtros = {nombre, valor};
    state.modoModal = null;
  },
  borrarFiltros(state) {
    state.filtros = {nombre: null, valor: {tipo: null, cantidad: null}}
  },
  cambiarOrdenarNombre(state) {
    state.orden.valor = null; // Reinicia el otro orden
    state.orden.nombre = obtieneElSiguienteOrden(state.orden.nombre);
  },
  cambiarOrdenarValor(state) {
    state.orden.nombre = null; // Reinicia el otro orden
    state.orden.valor = obtieneElSiguienteOrden(state.orden.valor);
  },
}
