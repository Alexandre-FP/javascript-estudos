/* Diferença entre valor primitivo e valor de referencia

Primitivo  (imutaveis) string, number, bollean, undefined, null (bigint, symbol) é valores que nao podemos muda

Referencia (mutavel) - arrays, objetos, function

*/

let a = [1, 2, 3]
let b = a // apotando pelo mesmo local da memoria

let c = [1, 2, 3]
let d = [...c] // se eu relamente quiser copia O MEU ARRAY, o valor de C para atribuir para D 