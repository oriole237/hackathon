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

function change_icon(){
    console.log("changement");
    var image =  document.getElementById("test_s");
    if(image.src == "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg"){
        image.src= "https://crushingit.tech/hackathon-assets/icon-spinner.svg";
        image.src= "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
        image.style.filter= "none";
    }else{
        image.src= "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg";
        image.style.filter= "contrast(0)";

    }
   
}
const text = document.querySelector('span.row_title');
const divS = document.querySelector('div.row_body');
const icon_hide = document.querySelector('div.hide_show');
const divG = document.querySelector('div.setup_guide2');

text.addEventListener('click',function(){
    divS.style.display = divS.style.display =="none" ? "block" : "none";
    divG.style.background = divS.style.display =="none" ? "initial" : " #F1F1F1";
    
});
icon_hide.addEventListener('click',function(){
    divG.style.display = divG.style.display =="none" ? "flex" : "none";
    
});

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
