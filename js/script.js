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


// var letters = ['a', 's', 'd'];
// var notes = ['C4', 'D4', 'E4'];

// document.addEventListener('keydown', e => {

//     if (letters.indexOf(e.key) > -1) {
//         // console.log(e.key);
//         var a = 0;
//         for (a = 0; a < letters.length; a++) {
//             for (var i = 0; i < notes.length; i++) {

//                 if (letters[a] == notes[i]) {
//                     console.log(notes[i]);
//                 }
//             }
//         }
//     }
// })


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

document.addEventListener("keypress", e => {
    switch (e.key) {
        case "a":
            return red.classList.add("red");
        default:

    }
});

document.addEventListener("keyup", e => {
    switch (e.key) {
        case "a":
            return red.classList.remove("red");
        default:

    }
});



// FOR RECORDING


var log = document.getElementById('log');
var input = document.querySelector('input');

var record = document.getElementById("record");

record.addEventListener('keypress', logKey);

function logKey(e) {
    log.textContent += `${e.code}`;
}