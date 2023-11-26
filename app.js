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

//spinner toggle implementation
img_spinner.forEach(function(spinner){
    spinner.addEventListener('click', function(e){
       
        if(e.target.src == "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg"){
            e.target.style.filter = "contrast(0)";
            e.target.src = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";

            setTimeout(function() {
                e.target.src="";
                e.target.style.filter = "contrast(1)";
                e.target.src = "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
            
            }, 950);

        }else{
            e.target.style.filter = "contrast(0)";
            e.target.src = "https://crushingit.tech/hackathon-assets/icon-spinner.svg";

            setTimeout(function() {
                e.target.src="";
                e.target.style.filter = "contrast(0)";
                e.target.src = "https://crushingit.tech/hackathon-assets/icon-dashed-circle.svg";
            
            }, 950);
        }
    
    });
});


//step details show or hide
for(let i=0; i<texts.length; i++){
    texts[i].addEventListener('click',function(event){

        for(let j=0; j<texts.length; j++){

            if(texts[j].id != event.target.id){
                texts[j].parentNode.parentNode.parentNode.classList.remove("bg_gris");
                texts[j].parentNode.querySelector(".btn_store").classList.remove("show_flex");
                texts[j].parentNode.querySelector(".btn_store").classList.add("hide");
                texts[j].parentNode.querySelector(".row_body").classList.add("hide");
                texts[j].parentNode.querySelector(".row_body").classList.remove("show");
                texts[i].parentNode.parentNode.querySelector(".elt_row_content2").classList.remove("show");
                texts[j].parentNode.parentNode.querySelector(".elt_row_content2").classList.add("hide");
            }
        }

        event.target.parentNode.parentNode.parentNode.classList.toggle("bg_gris");
        event.target.parentNode.querySelector(".btn_store").classList.toggle("show_flex");
        event.target.parentNode.querySelector(".btn_store").classList.toggle("hide");
        event.target.parentNode.querySelector(".row_body").classList.toggle("hide");
        event.target.parentNode.querySelector(".row_body").classList.toggle("show");
        event.target.parentNode.parentNode.querySelector(".elt_row_content2").classList.toggle("show");
        event.target.parentNode.parentNode.querySelector(".elt_row_content2").classList.toggle("hide");
        
    });
}


//all steps show or hide implementation
icon_hide.addEventListener('click',function(){
    
    for(let i=0; i<divG.length; i++){
      
        divG[i].classList.toggle("hide");
        divG[i].classList.toggle("show");
        divG[0].classList.toggle("bg_gris");

    }
    
});

const btn_user = document.getElementById("btn-user-letter");
const btn_notif = document.getElementById("btn-notif");
const notif_content = document.getElementById("dropdown_notification");
const menu_content = document.getElementById("user-menu-content");

//display or hide menu-item
btn_user.addEventListener('click', function(){
    menu_content.classList.toggle("show");
    menu_content.classList.toggle("hide");
    notif_content.classList.add("hide");
});

//display or hide notification content
btn_notif.addEventListener('click', function(){
    notif_content.classList.toggle("show");
    notif_content.classList.toggle("hide");
    menu_content.classList.add("hide");
});

