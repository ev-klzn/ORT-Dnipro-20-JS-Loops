let num = +prompt('Введите число');
console.log(`введенно число ${num}.`);
let primeNum = true;
for(let i = 2; i < num; i++){
    if (num % i === 0){
        primeNum = false;
        break;
    }
}

if(primeNum){
    console.log(`число ${num} прострое.`);
    alert(`число ${num} прострое.`);

}else{
    console.log(`число ${num} непрострое.`);
    alert(`число ${num} непрострое.`);
}