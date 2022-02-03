// for click dozens of button

var size = document.querySelectorAll(".set button").length;
for(var i = 0;i < size; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        sing(this.innerHTML);
        pressedKeyEffect(this.innerHTML);
    });
}

// sing function
function sing(key){
    switch(key){
        case "l":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;

        case "k":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;

        case "j":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;

        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;

        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;

        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
        break;
    }

}

// keyboard press 

// we can pass a type in function(event) which store the event happen on key board 
//  event.key store which was press
document.addEventListener("keypress",function(event){
    var key = event.key;
    sing(key);
    pressedKeyEffect(key);
});


// pressing Effect
function pressedKeyEffect(currentkey){
    var key = document.querySelector("." + currentkey);
    key.classList.add("pressed");

    // for delay the time 

    setTimeout(function(){
        key.classList.remove("pressed");
    },100);
}