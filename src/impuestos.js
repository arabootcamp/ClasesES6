export default class Impuestos {

  constructor(monto_bruto_anual, deducciones) {
    this._monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  get monto_bruto_anual() {
    return this._monto_bruto_anual;
  }

  set monto_bruto_anual(montoBrutoAnual) {
    this._monto_bruto_anual = montoBrutoAnual;
  }

  get deducciones() {
    return this._deducciones;
  }

  set deducciones(deducciones) {
    this._deducciones = deducciones;
  }
}