/**
 * @class ContadorModel
 * @property id
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
