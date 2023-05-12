//inicial
var title_ini = document.getElementById("edu-ini").textContent;
var text_ini = document.getElementById("text-ini").textContent;
var img_ini = document.getElementById("pic-ini");
var btn_ini= document.getElementById("inicial");


//primaria
var title_prim = document.getElementById("edu-prim").textContent;
var text_prim = document.getElementById("text-prim").textContent;
var img_prim = document.getElementById("pic-prim");
var btn_prim= document.getElementById("primaria");

let color1 = "rgba(97, 150, 291, 0.584)";
let color2 = "rgba(26, 81, 169, 0.184)";



function nivel (title, newTitle, text, newText, img, newImg, btn, newBtn, color, newColor ) {
    document.getElementById(title).textContent=newTitle;
    document.getElementById(text).textContent=newText;
    img.src=newImg;
    btn.style.backgroundColor=color;
    newBtn.style.backgroundColor=newColor;
}

function Primaria(nivel) { nivel("edu-ini", title_prim, "text-ini", text_prim, img_ini,
 "tagore/grupito.jpeg", btn_ini, btn_prim, color2, color1) };

 function Inicial(nivel) { nivel("edu-ini", title_ini, "text-ini", text_ini, img_ini,
 "tagore/ini.jpg", btn_ini, btn_prim, color1, color2) };


 function menu() {
    if(document.getElementById("list").style.display=="flex") {
        document.getElementById("list").style.display="none";
        document.getElementById("menu-close").style.display="none";
        document.getElementById("menu-open").style.display="block";

    }
    else {  document.getElementById("list").style.display="flex";
    document.getElementById("menu-open").style.display="none";
        document.getElementById("menu-close").style.display="block";
    }

 }

 function remove() {
    if (document.getElementById("menu-close").style.display=="block") {
    var final = document.getElementById("list").style.display="none";
    var open =    document.getElementById("menu-close").style.display="none";
    var close =     document.getElementById("menu-open").style.display="block";
    document.getElementsByClassName("word").addEventListener("click", final , open, close);
 }
}

 function leer (textoNull, botonNum) {
    
        
        if (document.getElementById(botonNum).innerHTML==`&nbsp;&nbsp;Leer más...`) {
            document.getElementById(textoNull).style.display="inline";
            document.getElementById(botonNum).innerHTML=`Leer menos...`;

        }
        else {
            document.getElementById(textoNull).style.display="none";
        document.getElementById(botonNum).innerHTML=`&nbsp;&nbsp;Leer más...`;
        }

 }
  
    function uno(leer) {
        leer("hide1", "read1")
    };
    function dos(leer) {
        leer("hide2", "read2")
    };
    function tres(leer) {
        leer("hide3", "read3")
    };


