"use strict";
window.addEventListener("load", function () {
    var sound1 = new Audio("A.mp3");
    var sound2 = new Audio("C.mp3");
    var sound3 = new Audio("F.mp3");
    var sound4 = new Audio("G.mp3");
    var sound5 = new Audio("hihat.mp3");
    var sound6 = new Audio("kick.mp3");
    var sound7 = new Audio("laugh-1.mp3");
    var sound8 = new Audio("laugh-2.mp3");
    var sound9 = new Audio("snare.mp3");
    // tslint:disable-next-line: typedef
    var sounds = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
    // tslint:disable-next-line: typedef
    function playSample(sound) {
        sound.play();
    }
    document.querySelector("#button1").addEventListener("click", function () { playSample(sounds[0]); });
    document.querySelector("#button2").addEventListener("click", function () { playSample(sounds[1]); });
    document.querySelector("#button3").addEventListener("click", function () { playSample(sounds[2]); });
    document.querySelector("#button4").addEventListener("click", function () { playSample(sounds[3]); });
    document.querySelector("#button5").addEventListener("click", function () { playSample(sounds[4]); });
    document.querySelector("#button6").addEventListener("click", function () { playSample(sounds[5]); });
    document.querySelector("#button7").addEventListener("click", function () { playSample(sounds[6]); });
    document.querySelector("#button8").addEventListener("click", function () { playSample(sounds[7]); });
    document.querySelector("#button9").addEventListener("click", function () { playSample(sounds[8]); });
    // Playbutton Teil 
    // tslint:disable-next-line: typedef
    var beat = [sound6, sound9, sound5];
    // tslint:disable-next-line: typedef
    function playBeat1() {
        beat[0].play();
    }
    // tslint:disable-next-line: typedef
    function playBeat2() {
        beat[1].play();
    }
    // tslint:disable-next-line: typedef
    function playBeat3() {
        beat[2].play();
    }
    // tslint:disable-next-line: typedef
    function playBeat() {
        setTimeout(function () { playBeat1(); }, 1);
        setTimeout(function () { playBeat2(); }, 500);
        setTimeout(function () { playBeat3(); }, 1000);
    }
    document.querySelector("#playb").addEventListener("click", playBeat);
});
//# sourceMappingURL=script.js.map