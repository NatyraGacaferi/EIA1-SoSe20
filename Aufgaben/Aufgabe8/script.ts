"use strict";
window.addEventListener("load", function () {
    document.querySelector("#button1").addEventListener("click", function () { playsample("A.mp3"); });
    document.querySelector("#button2").addEventListener("click", function () { playsample("C.mp3"); });
    document.querySelector("#button3").addEventListener("click", function () { playsample("F.mp3"); });
    document.querySelector("#button4").addEventListener("click", function () { playsample("G.mp3"); });
    document.querySelector("#button5").addEventListener("click", function () { playsample("hihat.mp3"); });
    document.querySelector("#button6").addEventListener("click", function () { playsample("kick.mp3"); });
    document.querySelector("#button7").addEventListener("click", function () { playsample("laugh-1.mp3"); });
    document.querySelector("#button8").addEventListener("click", function () { playsample("laugh-2.mp3"); });
    document.querySelector("#button9").addEventListener("click", function () { playsample("snare.mp3"); });
    document.querySelector("#play").addEventListener("click", playorstop);
    document.querySelector("#trash").addEventListener("click", deletebeat);
    document.querySelector("#record").addEventListener("click", recordBeat);
    //Aufgabe 7 und 8
    let beatInt = undefined;
    let beats = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    let recording = false;
    function recordBeat() {
        if (recording) {
            recording = false;
        }
        else {
            recording = true;
        }
    }
    function playsample(audios) {
        if (recording) {
            beats.push(audios);
        }
        const sound = new Audio(audios);
        sound.play();
    }
    function playorstop() {
        let playorstopbtn = document.querySelector("#play");
        if (playorstopbtn.className == "fas fa-play") {
            playorstopbtn.className = "fas fa-stop";
            playbeat();
        }
        else {
            playorstopbtn.className = "fas fa-play";
            clearInterval(beatInt);
        }
    }
    function deletebeat() {
        beats = [];
    }
    function playbeat() {
        var index = 0;
        beatInt = setInterval(function () {
            playsample(beats[index]);
            index += 1;
            if (index >= beats.length) {
                index = 0;
            }
        }, 600);
    }
});
