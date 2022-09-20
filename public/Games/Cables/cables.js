let group1 = document.querySelectorAll('.group1');
let input1 = document.querySelector('#input1');
input1.addEventListener('click', switch1);

function switch1() {

    for (let i = 0; i < group1.length; i++) {
        if (group1[i].classList.contains('off')) {
            group1[i].src = "/Games/Cables/imagesCables/FilOn.gif";
            group1[i].classList.remove('off');
            group1[i].classList.add('on');
            input1.classList.remove('imgBtnOff')
            input1.classList.add('imgBtnOn')
        } else {
            group1[i].src = "/Games/Cables/imagesCables/FilOff.png";
            group1[i].classList.remove('on');
            group1[i].classList.add('off');
            input1.classList.remove('imgBtnOn')
            input1.classList.add('imgBtnOff')
        }
    }
    checkIfWin()
}


let group2 = document.querySelectorAll('.group2');
let input2 = document.querySelector('#input2');
input2.addEventListener('click', switch2);

function switch2() {

    for (let i = 0; i < group2.length; i++) {
        if (group2[i].classList.contains('off')) {
            group2[i].src = "/Games/Cables/imagesCables/FilOn.gif";
            group2[i].classList.remove('off');
            group2[i].classList.add('on');
            input2.classList.remove('imgBtnOff')
            input2.classList.add('imgBtnOn')

        } else {
            group2[i].src = "/Games/Cables/imagesCables/FilOff.png";
            group2[i].classList.remove('on');
            group2[i].classList.add('off');
            input2.classList.remove('imgBtnOn')
            input2.classList.add('imgBtnOff')
        }
    }
    checkIfWin()
}


let group3 = document.querySelectorAll('.group3');
let input3 = document.querySelector('#input3');
input3.addEventListener('click', switch3);

function switch3() {

    for (let i = 0; i < group3.length; i++) {
        if (group3[i].classList.contains('off')) {
            group3[i].src = "/Games/Cables/imagesCables/FilOn.gif";
            group3[i].classList.remove('off');
            group3[i].classList.add('on');
            input3.classList.remove('imgBtnOff')
            input3.classList.add('imgBtnOn')
        } else {
            group3[i].src = "/Games/Cables/imagesCables/FilOff.png";
            group3[i].classList.remove('on');
            group3[i].classList.add('off');
            input3.classList.remove('imgBtnOn')
            input3.classList.add('imgBtnOff')
        }
    }
    checkIfWin();
}


let group4 = document.querySelectorAll('.group4');
let input4 = document.querySelector('#input4');
input4.addEventListener('click', switch4);

function switch4() {

    for (let i = 0; i < group4.length; i++) {
        if (group4[i].classList.contains('off')) {
            group4[i].src = "/Games/Cables/imagesCables/FilOn.gif";
            group4[i].classList.remove('off');
            group4[i].classList.add('on');
            input4.classList.remove('imgBtnOff')
            input4.classList.add('imgBtnOn')
        } else {
            group4[i].src = "/Games/Cables/imagesCables/FilOff.png";
            group4[i].classList.remove('on');
            group4[i].classList.add('off');
            input4.classList.remove('imgBtnOn')
            input4.classList.add('imgBtnOff')
        }
    }
    checkIfWin()
}


let group5 = document.querySelectorAll('.group5');
let input5 = document.querySelector('#input5');
input5.addEventListener('click', switch5);

function switch5() {

    for (let i = 0; i < group5.length; i++) {
        if (group5[i].classList.contains('off')) {
            group5[i].src = "/Games/Cables/imagesCables/FilOn.gif";
            group5[i].classList.remove('off');
            group5[i].classList.add('on');
            input5.classList.remove('imgBtnOff')
            input5.classList.add('imgBtnOn')
        } else {
            group5[i].src = "/Games/Cables/imagesCables/FilOff.png";
            group5[i].classList.remove('on');
            group5[i].classList.add('off');
            input5.classList.remove('imgBtnOn')
            input5.classList.add('imgBtnOff')
        }
    }
    checkIfWin()
}

let group6 = document.querySelectorAll('.group6');
let input6 = document.querySelector('#input6');
input6.addEventListener('click', switch6);

function switch6() {

    for (let i = 0; i < group6.length; i++) {
        if (group6[i].classList.contains('off')) {
            group6[i].src = "/Games/Cables/imagesCables/FilOn.gif";
            group6[i].classList.remove('off');
            group6[i].classList.add('on');
            input6.classList.remove('imgBtnOff')
            input6.classList.add('imgBtnOn')
        } else {
            group6[i].src = "/Games/Cables/imagesCables/FilOff.png";
            group6[i].classList.remove('on');
            group6[i].classList.add('off');
            input6.classList.remove('imgBtnOn')
            input6.classList.add('imgBtnOff')
        }
    }
    checkIfWin();
}




function checkIfWin() {
    if (document.querySelector('.cable1').classList.contains('on') &&
        document.querySelector('.cable2').classList.contains('on') &&
        document.querySelector('.cable3').classList.contains('on') &&
        document.querySelector('.cable4').classList.contains('on') &&
        document.querySelector('.cable5').classList.contains('on') &&
        document.querySelector('.cable6').classList.contains('on')
    ) {

        let finalTime = 1800 - timeGame;

        alert('Bravo! Porte dévérouillée' + finalTime);


        fetch('/game/saveresult', { method: 'POST', body: JSON.stringify({ "time": finalTime }) }).then(function (headers) {
            return headers.json();
        }).then(function (body) {
            if (body.result == "ok") {
                document.location.href = "game/win"
            } else {
                // 404 
            }
        })

    }
}
