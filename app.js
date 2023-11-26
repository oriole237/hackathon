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

const btn_user = document.getElementById("btn-user-letter");
const btn_notif = document.getElementById("btn-notif");
const notif_content = document.getElementById("dropdown_notification");
const menu_content = document.getElementById("user-menu-content");

btn_user.addEventListener('click', function(){
    menu_content.classList.toggle("show");
    menu_content.classList.toggle("hide");
    notif_content.classList.add("hide");
});

btn_notif.addEventListener('click', function(){
    notif_content.classList.toggle("show");
    notif_content.classList.toggle("hide");
    menu_content.classList.add("hide");
});