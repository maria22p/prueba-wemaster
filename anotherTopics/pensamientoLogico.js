// Escribe una función que tome un número entero como entrada y devuelva un array con
// todos los números enteros impares desde 1 hasta el número de entrada. Por ejemplo, si el
// número de entrada es 9, la función debería devolver [1, 3, 5, 7, 9].

/**
 * 
 * @param {number} n 
 */
const impares = (n) => {
  let a = 1
  const array = []
  while (a <= n) {
    if (a % 2) array.push(a)
    a += 1
  }
  return array
}
const result = impares(8)
console.log(result)
