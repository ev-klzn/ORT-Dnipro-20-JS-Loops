
for(let num = 3; num <= 1000; num++){
    let primeNum = true;
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            primeNum = false;
            break;
        }
    }
    if(primeNum){
        console.log(`число ${num} прострое`);
    }
}