let num = +prompt('Введите число');
console.log(`введенно число ${num}`);
let i;
let primeNum = true;
for(let i = 2; i < num; i++){
    if (num % i === 0){
        primeNum = false;
        break;
    }
}

if(primeNum){
    alert(`число ${num} прострое`);
    console.log(`число ${num} прострое`);
}else{
    alert(`число ${num} непрострое`)
    console.log(`число ${num} непрострое`);
}
