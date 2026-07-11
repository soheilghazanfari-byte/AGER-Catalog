/* =====================================
   AGER Catalog Builder
   app.js

   Main Application Controller
===================================== */



document.addEventListener(
"DOMContentLoaded",
function(){



/* =========================
   ELEMENTS
========================= */


const modelSelect =
document.getElementById(
"productModel"
);



const materialSelect =
document.getElementById(
"materialSelect"
);



const showModel =
document.getElementById(
"showModel"
);



const showMaterial =
document.getElementById(
"showMaterial"
);



const qrContainer =
document.getElementById(
"qrCode"
);



const status =
document.getElementById(
"statusMessage"
);








/* =========================
   PRODUCT DATA
========================= */


let AGER_PRODUCT = {


model:"",

material:"",

color:"",

size:""


};








/* =========================
   MODEL CHANGE
========================= */


if(modelSelect){


modelSelect.addEventListener(
"change",
function(){


AGER_PRODUCT.model =
this.value;



if(showModel){


showModel.textContent =
this.options[
this.selectedIndex
].textContent;


}



updateQR();


setStatus(
"مدل محصول انتخاب شد"
);



});

}








/* =========================
   MATERIAL CHANGE
========================= */


if(materialSelect){


materialSelect.addEventListener(
"change",
function(){


AGER_PRODUCT.material =
this.value;



if(showMaterial){


showMaterial.textContent =
this.options[
this.selectedIndex
].textContent;


}



updateQR();


setStatus(
"جنس محصول انتخاب شد"
);



});

}








/* =========================
   COLOR EVENT
========================= */


document.addEventListener(

"agerColorChanged",

function(e){


AGER_PRODUCT.color =
e.detail.name;



updateQR();


setStatus(
"رنگ محصول تغییر کرد"
);



}

);








/* =========================
   SIZE EVENT
========================= */


document.addEventListener(

"agerSizeChanged",

function(e){


AGER_PRODUCT.size =
e.detail.title;



updateQR();


setStatus(
"سایز انتخاب شد"
);



}

);








/* =========================
   QR CODE
========================= */


function updateQR(){


if(!qrContainer)
return;



qrContainer.innerHTML="";



let qrText = `

AGER

Model:
${AGER_PRODUCT.model}

Material:
${AGER_PRODUCT.material}

Color:
${AGER_PRODUCT.color}

Size:
${AGER_PRODUCT.size}

Instagram:
ager.co

`;





new QRCode(

qrContainer,

{

text:qrText,


width:100,


height:100,


correctLevel:
QRCode.CorrectLevel.H


}

);



}








/* =========================
   STATUS
========================= */


function setStatus(message){


if(status){


status.textContent =
message;



setTimeout(()=>{


status.textContent =
"آماده طراحی کاتالوگ AGER";


},2500);



}


}








/* =========================
   NEW PROJECT
========================= */


const newProjectBtn =
document.getElementById(
"newProjectBtn"
);



if(newProjectBtn){


newProjectBtn.addEventListener(
"click",
function(){


AGER_PRODUCT={

model:"",

material:"",

color:"",

size:""

};



if(showModel)
showModel.textContent="-";


if(showMaterial)
showMaterial.textContent="-";



document.getElementById(
"showColor"
).textContent="-";



document.getElementById(
"showSize"
).textContent="-";



qrContainer.innerHTML="";



setStatus(
"پروژه جدید ایجاد شد"
);



});

}








/* =========================
   SAVE PROJECT
========================= */


const saveProjectBtn =
document.getElementById(
"saveProjectBtn"
);



if(saveProjectBtn){


saveProjectBtn.addEventListener(
"click",
function(){



localStorage.setItem(

"AGER_PROJECT",

JSON.stringify(
AGER_PRODUCT
)

);



setStatus(
"پروژه ذخیره شد"
);



});

}








/* =========================
   LOAD PROJECT
========================= */


function loadProject(){


const saved =
localStorage.getItem(
"AGER_PROJECT"
);



if(!saved)
return;



AGER_PRODUCT =
JSON.parse(saved);



}



loadProject();








/* =========================
   PUBLIC ACCESS
========================= */


window.AGER_APP = {


product:
AGER_PRODUCT,


qr:
updateQR,


status:
setStatus


};



});