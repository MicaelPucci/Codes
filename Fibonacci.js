function fibonacci(n) {
let sequence = [0, 1];        
for(i = 2; i <= n; i++){
    sequence.push( sequence[i-1] + sequence[i-2]);
}
    return sequence[n - 1];
}
console.log(fibonacci(10));