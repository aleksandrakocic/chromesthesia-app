//FOR TONE OF THE KEYS FROM THE TONE.JS LIBRARY
const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toDestination();
var synthesizer = document.getElementById("synthesizer");
var key = document.getElementsByClassName("key");


// FOR NOTE TRIGGER
document.addEventListener("keydown", e => {
        switch (e.key) {
            case "a":
                return synth.triggerAttack("C4", "16n");
            case "w":
                return synth.triggerAttack("C#4", "16n");
            case "s":
                return synth.triggerAttack("D4", "16n");
            case "e":
                return synth.triggerAttack("D#4", "16n");
            case "d":
                return synth.triggerAttack("E4", "16n");
            case "f":
                return synth.triggerAttack("F4", "16n");
            case "y":
                return synth.triggerAttack("F#4", "16n");
            case "h":
                return synth.triggerAttack("G4", "16n");
            case "u":
                return synth.triggerAttack("G#4", "16n");
            case "j":
                return synth.triggerAttack("A4", "16n");
            case "i":
                return synth.triggerAttack("A#4", "16n");
            case "k":
                return synth.triggerAttack("B4", "16n");
            case "l":
                return synth.triggerAttack("C5", "16n");
            default:
                return;
        }
    }

);

//STOP  SOUND 

document.addEventListener("keyup", e => {
        switch (e.key) {
            case "a":
            case "w":
            case "s":
            case "e":
            case "d":
            case "f":
            case "y":
            case "h":
            case "u":
            case "j":
            case "i":
            case "k":
            case "l":
                synth.triggerRelease();
        }
    }

);






// triger the note on mouse click
synthesizer.addEventListener("mousedown", e => {
    synth.triggerAttack(e.target.dataset.note);
});

synthesizer.addEventListener("mouseup", e => {
    synth.triggerRelease()
});






// FOR COLORS ANIMATION


var red = document.getElementById("red");
var orange = document.getElementById('orange');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var cyan = document.getElementById('cyan');
var blue = document.getElementById('blue');
var violet = document.getElementById('violet');


// ANIMATION ON KEYDOWN
document.addEventListener("keydown", e => {
    switch (e.key) {
        case "a":
            return red.classList.add("red-visible");
        case "s":
            return orange.classList.add('orange-visible');
        case 'd':
            return yellow.classList.add('yellow-visible');
        case 'f':
            return green.classList.add('green-visible');
        case 'h':
            return cyan.classList.add('cyan-visible');
        case 'j':
            return blue.classList.add('blue-visible');
        case 'k':
            return violet.classList.add('violet-visible');

        default:
            return;

    }
});


//END ANIMATION ON KEYUP
document.addEventListener("keyup", e => {
    switch (e.key) {
        case "a":
            return red.classList.remove("red-visible");
        case "s":
            return orange.classList.remove("orange-visible");
        case "d":
            return yellow.classList.remove("yellow-visible");
        case "f":
            return green.classList.remove("green-visible");
        case "h":
            return cyan.classList.remove("cyan-visible");
        case "j":
            return blue.classList.remove("blue-visible");
        case "k":
            return violet.classList.remove("violet-visible");
        default:

    }
});






// FOR RECORDING --- NE RADI


// var log = document.getElementById('log');
// var input = document.querySelector('input');
// var record = document.getElementById("record");
// var save = document.getElementById("save");
// var value = [];
// record.addEventListener('keypress', logKey);

// function logKey(e) {
// log.textContent += `${e.key}`;
//     value += `${e.key}`;
//     console.log(value);
// }

// save.addEventListener("click", repeatValue);

// function repeatValue()[

// ]













// FOR KEYS 3D ANIMATION
// WORKS ONLY ON MOUSE  CLICK





var header = document.getElementById("synthesizer");
var btns = header.getElementsByClassName("key");

// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("shadow-inset-center");
//         if (current.length > 0) {
//             current[0].className = current[0].className.replace(" shadow-inset-center", "");
//         }
//         this.className += " shadow-inset-center";
//     })
// };



letters = ['a', 's', 'd'];
var value = '';

document.addEventListener("keydown", findKey);

function findKey(e) {
    value = e.key;
    // console.log(value);
    var a = letters.indexOf(value);
    console.log(a);
    // console.log(btns[a]);
    btns[a].classList.add('shadow');

    // for (var i = 0; i < btns.length; i++) {
    //     // console.log(btns[a]);
    //     btns[a].addEventListener("keydown", function() {
    //         var current = document.getElementsByClassName("shadow-inset-center");
    //         if (current.length > 0) {
    //             current[0].className = current[0].className.replace(" shadow-inset-center", "");
    //         }
    //         this.className += " shadow-inset-center";
    //     })
    // };

}