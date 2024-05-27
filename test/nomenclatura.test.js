const assert = require('node:assert')
const suma = require('../anotherTopics/nomenclatura.js')
describe('Probando nomenclatura', () => {
  it('Probando suma', () => {
    const resultado = suma(1,2,3)
    const esperado = Math.sin((1 + 2) * 3);
    assert.strictEqual(resultado, esperado, `El resultado deberia ser ${esperado}`)
  })
})