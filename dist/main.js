"use strict";

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var objetoImpuesto = new _impuestos["default"](12000, 5000);
var objetoCliente = new _cliente["default"]("Cliente 01", objetoImpuesto);
console.log("objetoImpuesto creado con los datos-> monto_bruto_anual: ".concat(objetoImpuesto.monto_bruto_anual, ", deducciones: ").concat(objetoImpuesto.deducciones));
console.log("objeto Cliente creado con los datos -> nombre: ".concat(objetoCliente.nombre, ", obImpuesto: "));
console.log(objetoImpuesto);
console.log("El impuesto para el cliente detallado arriba es: ".concat(objetoCliente.calcularImpuesto()));