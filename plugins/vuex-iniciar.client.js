export default async function ({store}) {
  store.subscribe((mutation, state) => {
    // Periodicamente Guardará los contadores en el Storage
    localStorage.setItem("contador-items", JSON.stringify(state.contador.items));
    // Periodicamente Guardará los filtros en la Sesión
    sessionStorage.setItem('contador-orden', JSON.stringify(state.contador.orden));
  })

  store.dispatch('iniciarAlmacen');
}
