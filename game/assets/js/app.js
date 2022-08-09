
    let secret = Math.random();
    secret = Math.floor(secret * 100) + 1; 

    let isFail = true;

    for(let i = 1; i <= 10; i++){

        let variant = +prompt(`Ваш вариант (${i}/10)`);

        if(variant == secret){
            alert(`Вы угадали!!!`);
            isFail = false;
            break;
        }else if(secret > variant){
            alert(`Моё число больше ${variant}`);
        }else {
            alert(`Моё число меньше ${variant}`);
        }

    }

    if(isFail){
        alert(`Game Over!!! Ответ был ${secret}`);
    }
  

 