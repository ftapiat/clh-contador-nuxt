/**
 * @class ContadorModel
 * @property id - Identificador único del contador.
 * Permitirá buscar al contador en la lista sin utilizar el index, que podría ser distinto en el listado global
 * de contadores (state.js), y del listado de contadores filtrados (getters.js)
 * @property nombre
 * @property valor
 */
export class ContadorModel {
  /**
   * @param {?number} id
   * @param {string} nombre
   * @param {number} valor
   */
  constructor({id = null, nombre, valor}) {
    this.id = id ?? Math.floor(Math.random() * Date.now());
    this.nombre = nombre;
    this.valor = valor;
  }
}
