// function f(x, y, z) {
//   let a = x + y;
//   let b = a * z;
//   let c = Math.sin(b);
//   return c;
//  }

const suma = (primerNumero, segundoNumero, tercerNumero) => {
  const adicion = primerNumero + segundoNumero
  const multiplicacion = adicion * tercerNumero
  const senoDe = Math.sin(multiplicacion)
  return senoDe
}
suma(1,2,3)
module.exports = suma