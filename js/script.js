//FOR TONE OF THE KEYS FROM THE TONE.JS LIBRARY
const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.toDestination();
var synthesizer = document.getElementById("synthesizer");


// var for the colors trigger
var red = document.getElementById("red");
var orange = document.getElementById('orange');
var yellow = document.getElementById('yellow');
var green = document.getElementById('green');
var cyan = document.getElementById('cyan');
var blue = document.getElementById('blue');
var violet = document.getElementById('violet');
var redDark = document.getElementById('red-dark');

//section fot the keydown events
document.addEventListener("keydown", (e) => {

    var key = e.key;
    switch (e, key) {
        case "a":
            red.classList.add("red-visible");
            document.querySelectorAll('.key')[0].classList.add("pressed");
            synth.triggerAttack("C4", "16n");
            break

        case "w":
            synth.triggerAttack("C#4", "16n");
            break

        case "s":
            document.querySelectorAll('.key')[1].classList.add("pressed");
            orange.classList.add('orange-visible');
            synth.triggerAttack("D4", "16n");
            break

        case "e":
            synth.triggerAttack("D#4", "16n");
            break
        case "d":

            yellow.classList.add('yellow-visible');
            document.querySelectorAll('.key')[2].classList.add("pressed");
            synth.triggerAttack("E4", "16n");
            break

        case "f":
            green.classList.add('green-visible');
            document.querySelectorAll('.key')[3].classList.add("pressed");
            synth.triggerAttack("F4", "16n");
            break

        case "y":
            synth.triggerAttack("F#4", "16n");
            break

        case "h":
            cyan.classList.add('cyan-visible');
            document.querySelectorAll('.key')[4].classList.add("pressed");
            synth.triggerAttack("G4", "16n");
            break

        case "u":
            synth.triggerAttack("G#4", "16n");
            break

        case "j":
            blue.classList.add('blue-visible');
            document.querySelectorAll('.key')[5].classList.add("pressed");
            synth.triggerAttack("A4", "16n");
            break

        case "i":
            synth.triggerAttack("A#4", "16n");
            break

        case "k":
            violet.classList.add('violet-visible');
            synth.triggerAttack("B4", "16n");
            document.querySelectorAll('.key')[6].classList.add("pressed");
            break

        case "l":
            document.querySelectorAll('.key')[7].classList.add("pressed");
            synth.triggerAttack("C5", "16n");
            redDark.classList.add('dark-red-visible');
            break;
    }
})



//section fot the keyup events
document.addEventListener("keyup", e => {
    switch (e.key) {
        case "a":
            document.querySelectorAll('.key')[0].classList.remove("pressed");
            synth.triggerRelease();
            red.classList.remove("red-visible");

        case "s":
            document.querySelectorAll('.key')[1].classList.remove("pressed");
            synth.triggerRelease();
            orange.classList.remove("orange-visible");

        case "d":
            document.querySelectorAll('.key')[2].classList.remove("pressed");
            synth.triggerRelease();
            yellow.classList.remove("yellow-visible");

        case "f":
            document.querySelectorAll('.key')[3].classList.remove("pressed");
            synth.triggerRelease();
            green.classList.remove("green-visible");

        case "h":
            document.querySelectorAll('.key')[4].classList.remove("pressed");
            synth.triggerRelease();
            cyan.classList.remove("cyan-visible");

        case "j":
            document.querySelectorAll('.key')[5].classList.remove("pressed");
            synth.triggerRelease();
            blue.classList.remove("blue-visible");

        case "k":
            document.querySelectorAll('.key')[6].classList.remove("pressed");
            synth.triggerRelease();
            violet.classList.remove("violet-visible");

        case "l":
            document.querySelectorAll('.key')[7].classList.remove("pressed");
            synth.triggerRelease();
            redDark.classList.remove("dark-red-visible");



    }
});