export default async function ({store}) {
  store.subscribe((mutation, state) => {
    // Cuando ocurra una modificación en el estado, guardará los contadores en el Storage
    localStorage.setItem("contador-items", JSON.stringify(state.contador.items));
  })

  store.commit('contador/hidratarEstadoDesdeElStorage');
}
