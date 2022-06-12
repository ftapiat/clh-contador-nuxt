const state = {
  items: [],
  modoModal: null,
  orden: {
    nombre: null,
    valor: null,
  },
  filtros: {
    nombre: null,
    valor: {
      tipo: null,
      cantidad: null,
    }
  }
};

export default () => (state);
