// Your javascript goes here
function RemoveBoxTrial(){
    var box = document.getElementById("select_plan");
    box.style.display = "none";
}
function display_settings(){
console.log("fd");
    var box = document.getElementById("dropdown_notification");
    box.style.display = "block";
}

var btn_user = document.getElementById("btn-user-letter");
var  menu_content = document.getElementById("user-menu-content");
var btn = document.querySelector(".btn");
console.log(btn, 'btff');

btn.addEventListener('click', function(e){
    console.log(e, "evveee")
    menu_content = document.getElementById("user-menu-content");
    menu_content.classList.toggle("show");
    menu_content.classList.toggle("hide");
});

function hideShowMenu(id){console.log("d")
    var menu_content = "";
    // var menu = document.querySelector(".menu");
    // // var btn_user = document.getElementById("btn-user-letter");
    // menu.style.display =  "none";
    // btn_user.style.display =  "none";

    //chech btn clicked
    if(id == "btn-user-letter"){
        menu_content = document.getElementById("user-menu-content");
    }else if(id =="btn-notif"){
        menu_content = document.getElementById("dropdown_notification");
    }

    if(menu_content != ""){console.log("d")
        menu_content.classList.toggle("show");
    }    

}

// hideShowMenu("btn-notif");