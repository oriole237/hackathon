// Your javascript goes here

var user_menu = document.getElementById("user-menu");
var user_content = document.getElementById("user-menu-content");

//hide show davii collection content
user_content.addEventListener('click', function(){ alert("in")
    user_content.toggle();
});

function RemoveBoxTrial(){
    var box = document.getElementById("select_plan");
    box.style.display = "none";
}
function display_settings(){
console.log("fd");
    var box = document.getElementById("dropdown_notification");
    box.style.display = "block";
}

