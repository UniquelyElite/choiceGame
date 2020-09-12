let scene = 1;
let textshown = document.getElementById('display');
let input = document.getElementsByClassName('choices')

function makeVisible() {
    for (const choice of input){
        choice.style.visibility = 'visible'
    }
}

function displayer(text, speed, callback = ''){
    textshown.innerText = '';
    for (const choice of input){
        choice.style.visibility = 'hidden';
        choice.onclick = '';
    }
    console.log(text);
    function worder(text, speed, callback) {
        setTimeout(function(){textshown.innerText += text[0]; text = text.substring(1); if (text == ''){ if (callback == ''){return} else { callback() }} else {worder(text, speed, callback)}}, speed);
    }
    worder(text, speed, callback);
}

function choiceDisplayer(a, b, c){
    input.choice1.innerText = a;
    input.choice2.innerText = b;
    input.choice3.innerText = c;
}

function death() {
    displayer('SYSTEM FAILURE\n\nSHUTTING DOWN...', 100, loading1);
}

function loading1() {
    displayer('Rebooting...', 250, loading2);
}
function loading2() {
    displayer('You jolt awake, everywhere is pitch black. What feels like cold stone lays beneath you...', 50, loading3)
}

function loading3() {
    for (const choice of input){
        choice.style.visibility = 'visible'
        choice.onclick = function(){scene1()};
    }
    input.choice1.innerText = '"Hello?"';
    input.choice2.innerText = '...';
    input.choice3.innerText = 'scream';
}

//window["hello"]('yo', 'bo');
//let i = window.event.target.id;
loading1();
//scenes

function scene1() {
    let x = window.event.target.id;

    if (x == 'choice2'){
        choiceDisplayer('Examine it', 'Drop it', 'Throw it');
        displayer('You stay still for a few seconds, noticing a faint whirring sound. Something ice cold lands in your hand...', 50, makeVisible)
        for (const choice of input){
            choice.onclick = function(){scene2()};
        }
    }

    if (x == 'choice3' || x == 'choice1'){
        choiceDisplayer('Cover ears', 'Yell at it', '');
        displayer('An eerie alarm begins to sound...', 50, makeVisible)
        for (const choice of input){
            choice.onclick = function(){scene3()};
        }
    }
}

function scene2() {
    let x = window.event.target.id;

    if (x == 'choice1'){
    }
    if (x == 'choice2'){
        choiceDisplayer('Cover ears', 'Yell at it', '')
        displayer('It loudly clatters to the floor, the sound echoing around...\n\nAn eerie alarm begins to sound...', 50, makeVisible);
        for (const choice of input){
            choice.onclick = function(){scene3()};
        }
    }
    if (x == 'choice3'){
    }

}

function scene3() {
    let x = window.event.target.id;

    if (x == 'choice1'){
        displayer('The alarm fades, you decide to uncover your ears...\n\nYou stay still for a few seconds, noticing a faint whirring sound. Something ice cold lands in your hand...', 50, makeVisible)
        choiceDisplayer('Examine it', 'Drop it', 'Throw it');
        for (const choice of input){
            choice.onclick = function(){scene2()};
        }
    }
    if (x == 'choice2'){
        displayer('Your vision is filled with glitching stuff... pixels? Wha- th- fu- dg-\n\n\n\n', 50, death)
    }
    if (x == 'choice3'){
    }
}