

 function factorialIterativo(n) {
    let factorial =1;
    for(let i=1; i <= n; i++){
        factorial *= i;

    }
    return factorial;

 }
 let numero = 999;
 let resultado = factorialIterativo(numero);
 console.log(`el factorial de ${numero} es: ${resultado}`);