//




let randomGame = function () {

    let num;
    let times = 0;

    let timer = setInterval(function () {

        num = Math.random();
        times++
        if (num > .75) {
            clearInterval(timer);
            console.log("It took " + times + " try/tries to get to this point!!")
        }














    }, 1000)












}


randomGame()
