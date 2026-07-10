// ===============================
// AGER Catalog Builder
// script.js
// ===============================

// عناصر صفحه
const modelInput = document.getElementById("model");
const previewModel = document.getElementById("previewModel");

const materialSelect = document.getElementById("material");

const info = document.querySelector(".info");

const mainImageInput = document.getElementById("mainImage");
const smallImageInput = document.getElementById("smallImage");

const bigPhoto = document.querySelector(".big-photo");
const smallPhoto = document.querySelector(".small-photo");

const buildButton = document.getElementById("build");


// ------------------------------
// تغییر نام مدل
// ------------------------------

modelInput.addEventListener("input", () => {

    if(modelInput.value.trim() === ""){

        previewModel.innerText = "نام مدل";

    }else{

        previewModel.innerText = modelInput.value;

    }

});


// ------------------------------
// تغییر جنس
// ------------------------------

materialSelect.addEventListener("change", () => {

    let material = materialSelect.value;

    info.children[1].innerText = material;

});


// ------------------------------
// عکس بزرگ
// ------------------------------

mainImageInput.addEventListener("change",(event)=>{

    const file = event.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload=function(e){

        bigPhoto.innerHTML="";

        const img=document.createElement("img");

        img.src=e.target.result;

        img.style.width="100%";

        img.style.height="100%";

        img.style.objectFit="contain";

        bigPhoto.appendChild(img);

    }

    reader.readAsDataURL(file);

});


// ------------------------------
// عکس کوچک
// ------------------------------

smallImageInput.addEventListener("change",(event)=>{

    const file=event.target.files[0];

    if(!file) return;

    const reader=new FileReader();

    reader.onload=function(e){

        smallPhoto.innerHTML="";

        const img=document.createElement("img");

        img.src=e.target.result;

        img.style.width="100%";

        img.style.height="100%";

        img.style.objectFit="contain";

        smallPhoto.appendChild(img);

    }

    reader.readAsDataURL(file);

});


// ------------------------------
// دکمه ساخت کاتالوگ
// ------------------------------

buildButton.addEventListener("click",()=>{

    alert("کاتالوگ با موفقیت بروزرسانی شد.");

});