const menubarra = document.getElementById("menubarra");
var trocar = 1;


function ativarmenu(){
    if(trocar % 2 == 1){
        menubarra.classList.remove("menuBar");
        menubarra.classList.remove("menuBaroff");
        menubarra.classList.add("menuBaron");
    }
    else{
        menubarra.classList.remove("menuBaron");
        menubarra.classList.add("menuBaroff");
    }
    trocar++;
}


function intapastor(){
    window.location = "https://www.instagram.com/joilson.alves/";
}


function instaingreja(){
    window.location = "https://www.instagram.com/igrejacomunhaopaiol/";
}


function youtube(){
    window.location = "youtube.com/channel/UCWKcdMfBG2jk4La7zUEJgT";
}


