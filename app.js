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

// function change_icon(e){
//     console.log(e,"changement");
//     var image =  document.getElementById("test_s");
//     if(image.src == "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg"){
//         image.src= "https://crushingit.tech/hackathon-assets/icon-spinner.svg";
//         image.src= "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
//         image.style.filter= "none";
//     }else{
//         image.src= "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg";
//         image.style.filter= "contrast(0)";

//     }
   
// }
const texts = document.querySelectorAll('span.row_title');
const divS = document.querySelector('div.row_body');
const icon_hide = document.querySelector('div.hide_show');
const divG = document.querySelectorAll('div.setup_guide2');
const btn_store = document.querySelectorAll('.btn_store');
const img_spinner = document.querySelectorAll('.img_spinner');

img_spinner.forEach(function(spinner){
    spinner.addEventListener('click', function(e){
       
        if(e.target.src == "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg"){
            e.target.style.filter = "contrast(0)";
            e.target.src = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";

            setTimeout(function() {
                e.target.src="";
                e.target.style.filter = "contrast(1)";
                e.target.src = "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
            
            }, 550);

        }else{
            // e.target.style.filter = "contrast(0)";
            // e.target.src = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";

            setTimeout(function() {
                e.target.src="";
                e.target.style.filter = "contrast(0)";
                e.target.src = "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg";
            
            }, 550);
        }
    
    });
});


for(let i=0; i<texts.length; i++){
    texts[i].addEventListener('click',function(){

        texts[i].parentNode.parentNode.parentNode.classList.toggle("bg_gris");
        texts[i].parentNode.querySelector(".btn_store").classList.toggle("show_flex");
        texts[i].parentNode.querySelector(".btn_store").classList.toggle("hide");
        texts[i].parentNode.querySelector(".row_body").classList.toggle("hide");
        texts[i].parentNode.querySelector(".row_body").classList.toggle("show");
        texts[i].parentNode.parentNode.querySelector(".elt_row_content2").classList.toggle("show");
        texts[i].parentNode.parentNode.querySelector(".elt_row_content2").classList.toggle("hide");
        
        // console.log(texts[i].parentNode.parentNode.parentNode, "next texxttt")
        // divS.style.display = divS.style.display =="none" ? "block" : "none";
        // divG.style.background = divS.style.display =="none" ? "initial" : " #F1F1F1";
        
    });
}

icon_hide.addEventListener('click',function(){
    // console.log(divG, "ell dic");
    
    for(let i=0; i<divG.length; i++){
        // console.log(divG[i], "jd");
        divG[i].classList.toggle("hide");
        divG[i].classList.toggle("show");
        divG[0].classList.toggle("bg_gris");

    }
    
});

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

