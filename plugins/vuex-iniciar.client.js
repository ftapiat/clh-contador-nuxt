import {llaves} from "~/src/config/llaves";

export default async function ({store}) {
  store.subscribe((mutation, state) => {
    localStorage.setItem(llaves.items, JSON.stringify(state.contador.items));
    sessionStorage.setItem(llaves.orden, JSON.stringify(state.contador.orden));
    sessionStorage.setItem(llaves.filtros, JSON.stringify(state.contador.filtros));
  })

  store.dispatch('iniciarAlmacen');
}
