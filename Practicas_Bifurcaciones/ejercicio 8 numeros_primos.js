//realiza un programa que muestre todos los numeros primos que el usuario digite 


function isPrime(numero) {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function findPrimes(limit) {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}


const numero_ususario = 1000; 


const primes = findPrimes(numero_ususario);

console.log(`Los números primos hasta ${numero_ususario} son: ${primes.join(', ')}`);