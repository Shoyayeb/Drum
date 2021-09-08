var numOfDrums = document.querySelectorAll(".drum").length;
for (var i = 0; i < numOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(buttonInnerHTML);
});
            var crash = new Audio("./sounds/crash.mp3");
            var kick = new Audio("./sounds/kick-bass.mp3");
            var snare = new Audio("./sounds/snare.mp3");
            var tom1 = new Audio("./sounds/tom-1.mp3");
            var tom2 = new Audio("./sounds/tom-2.mp3");
            var tom3 = new Audio("./sounds/tom-3.mp3");
            var tom4 = new Audio("./sounds/tom-4.mp3");
function makeSound(key) {
    switch (key) {
        case "w":
            crash.play();
            break;
        case "a":
            kick.play();
            break;
        case "s":
            snare.play();
            break;
        case "d":
            tom1.play();
            break;
        case "j":
            tom2.play();
            break;
        case "k":
            tom3.play();
            break;
        case "l":
            tom4.play();
            break;
        default:
            console.log("wrong button pressed😁")
    }

}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}
