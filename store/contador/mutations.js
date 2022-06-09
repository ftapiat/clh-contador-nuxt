import {ContadorModel} from "~/src/models/ContadorModel";

const obtieneElSiguienteOrden = (ordenActual) => {
  const ordenDisponibles = [null, 'ASC', 'DESC'];
  return ordenDisponibles[ordenDisponibles.indexOf(ordenActual) + 1] ?? ordenDisponibles[0];
}

export default {
  cargarValoresDesdeLosStorage(state) {
    const storageItems = localStorage.getItem("contador-items");
    let items;
    if (storageItems) {
      items = JSON.parse(storageItems).map((object) => new ContadorModel(object));
    }

    const sessionOrden = sessionStorage.getItem("contador-orden");
    let orden;
    if (sessionOrden) {
      orden = JSON.parse(sessionOrden);
    }

    state = Object.assign(state, {
      items: items ?? state.items,
      orden: orden ?? state.orden,
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
    state.agregandoContador = true;
  },
  cerrarFormularioParaAgregar(state) {
    state.agregandoContador = false;
  },
  agregarContador(state, nombre) {
    state.items.push(new ContadorModel({nombre, valor: 0}));
    state.agregandoContador = false;
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
