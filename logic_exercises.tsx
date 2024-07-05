/* 
  1. Fibonacci: Escribe una función llamada fibonacci que tome un número n como entrada
  y devuelva los primeros n números de la secuencia de Fibonacci. 
*/
const fibonacci = (num: number): void=>{
  const fib = [0, 1]
  for (let i = 2; i < num; i++){
    fib[i] = fib[i-1] + fib[i-2]
  }
  console.log(fib)
}
 fibonacci(5)
/*
  2. Palíndromo: Escribe una función llamada is_palindrome que tome una cadena de texto como 
  entrada y devuelva true si es un palíndromo (se lee igual de izquierda a derecha que de derecha 
  a izquierda) y false en caso contrario. 
*/
 const is_palindrome = (string: string)=>{
  const palin = string.split('')
  const compare = palin.reverse().join('')
  if(compare === string){
    console.log("Es palindromo")
  }else{
    console.log("No es palindromo")
  }
 }
 is_palindrome("text")

/*
  3. Números Primos: Escribe una función llamada prime_numbers que tome un número n 
  como entrada y devuelva todos los números primos menores o iguales a n.
*/
const prime_numbers = (number: number) :void=>{
  const primos: number[]= []

  for (let i = 2; i <= number; i++) {
    let esPrimo = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        esPrimo = false
        break
      }
    }

    if (esPrimo) {
      primos.push(i)
    }
  }

  console.log(primos)
}
prime_numbers(45)

/*
  4. Ordenamiento de Burbuja: Implementa el algoritmo de ordenamiento de burbuja en una 
  función llamada bubble_sort que tome una lista de números como entrada y devuelva la lista ordenada de menor a mayor.
*/
const array = [1,2,4,5,7,3,2,5]
const bubble_sort = (arr: number[])=>{
  const N = arr.length

  for (let i = 0; i < N; i++){
    for (let x = 0; x < N - 1 - i; x++) {
      if(arr[x] > arr[x + 1]){
        //si es mayor intercambiamos posiciones
        const temp = arr[x]
        arr[x] = arr[x + 1]
        arr[x + 1] = temp
      }

      
    }
  }
  return arr
}
bubble_sort(array)
/*
  Búsqueda Binaria: Escribe una función llamada binary_search que implemente el algoritmo 
  de búsqueda binaria. La función debe tomar una lista ordenada y un elemento como entrada, 
  y devolver la posición del elemento en la lista o -1 si el elemento no está en la lista.
*/

function binary_search(arr: number[], target:number){
  let left = 0
  let right = arr.length -1

  while(left <= right){
    
    //calculamos el indice medio del arreglo

    const mid = Math.floor((left + right)/2)

    // Si el indice medio es el target devolvemos el indice
    if(arr[mid] === target) return mid
    
    // si el elemento medio es menor al target vamos a la derecha
    if(arr[mid]< target){
      left = mid + 1
      continue
    }

    // si es mayor vamos a la izquierda
    right = mid -1
  }
  // si no lo encontramos
  return -1
}

const newArray = [1,2,3,4,5,6,7,8,9]
binary_search(newArray, 5)