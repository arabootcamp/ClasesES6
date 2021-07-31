export default class Cliente {

  constructor(nombre, obImpuesto = {}) {
    this._nombre = nombre;
    this.obImpuesto = obImpuesto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre
  }

  calcularImpuesto() {
    let impuesto = Math.round((this.obImpuesto.monto_bruto_anual - this.obImpuesto.deducciones) * 0.21);
    if (isNaN(impuesto))
      return '"No esta creado el objeto impuesto para el objeto cliente."';
    else
      return impuesto;
  }
}