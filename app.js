// Your javascript goes here

let span_close = document.getElementById("span_close");

// mask trial plan message
span_close.onclick = function(){
    let trial_msg = document.getElementById("trial_msg");
    trial_msg.style.display = "none";
}