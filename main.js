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
    var can = document.getElementById('deathSceneCanvas');
    can.style.zIndex = 2;
    var ctx = can.getContext('2d'); 
    var img = new Image(); 
    img.src = "back.png"; 
    var img2 = new Image();
    img2.src = 'imademyownerror.jpg';
    //Background of death
    function deathGif() { 
        ctx.drawImage(img, 0, 0);
        //Draw images along width
        for (let i = 0; (can.width / 300) > i; i++){
            ctx.drawImage(img, 300 * i, Math.floor(Math.random() * can.width), can.width/5, can.height/5)
        }
        //Draw images along height
        for (let i = 0; (can.height / 300) > i; i++){
            ctx.drawImage(img, Math.floor(Math.random() * can.height), 300 * i, can.width/5, can.height/5)
        }
    } 
    //initiate it
    for (let i = 70; i > 0; i--){
        setTimeout(function(){ctx.drawImage(img2, Math.floor(Math.random() * can.height), Math.floor(Math.random() * can.width), can.width/3, can.height/3)}, i * 100);
    }
    setTimeout(function(){
        let gif = setInterval(deathGif, 50);
        setTimeout(function(){
            clearInterval(gif);
            ctx.clearRect(0, 0, can.width, can.height);
            setTimeout(function() {can.style.zIndex = -1; loading1()}, 2000);
        }, 1000);
    }, 7000);
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

    if (x == 'choice1' && input.choice1.innerText != 'Examine it'){
        choiceDisplayer('Cover ears', 'Yell at it', 'Follow sound')
        displayer('Their is a loud beep as your finger presses it. An eerie alarm sounds, nearly drowning out the sound of screeching metal...', 50, makeVisible);
        for (const choice of input){
            choice.onclick = function(){scene3()};
        }
    } else if (x == 'choice1'){
        choiceDisplayer('Push it', 'Drop it', 'Throw it')
        displayer('You turn it over in your hands, searching it with your fingers...\n\nYou find some sort of... button?', 50, makeVisible);
        for (const choice of input){
            choice.onclick = function(){scene2()};
        }
    }
    if (x == 'choice2'){
        choiceDisplayer('Cover ears', 'Yell at it', '')
        displayer('It loudly clatters to the floor, the sound echoing around...\n\nAn eerie alarm begins to sound...', 50, makeVisible);
        for (const choice of input){
            choice.onclick = function(){scene3()};
        }
    }
    if (x == 'choice3'){
        choiceDisplayer('Cover ears', 'Yell at it', 'Follow sound')
        displayer('Their is a loud beep as it hits a wall. An eerie alarm sounds, nearly drowning out the sound of screeching metal...', 50, makeVisible);
        for (const choice of input){
            choice.onclick = function(){scene3()};
        }
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
        displayer('You begin to yell at the alarm, but soon find youself unable to yell...\n\n\n\n', 50, death)
    }
    if (x == 'choice3' && input.choice3.innerText != ''){
        displayer('After taking a few steps you find youself unable to move forward...\n\n\n\n', 50, death);
    }
}

function scene4() {}