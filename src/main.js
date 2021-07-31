import Impuestos from './impuestos.js';
import Cliente from './cliente.js';

let objetoImpuesto = new Impuestos(12000, 5000);
let objetoCliente = new Cliente("Cliente 01", objetoImpuesto);

console.log(`objetoImpuesto creado con los datos-> monto_bruto_anual: ${objetoImpuesto.monto_bruto_anual}, deducciones: ${objetoImpuesto.deducciones}`);
console.log(`objeto Cliente creado con los datos -> nombre: ${objetoCliente.nombre}, obImpuesto: `);
console.log(objetoImpuesto)
console.log(`El impuesto para el cliente detallado arriba es: ${objetoCliente.calcularImpuesto()}`);