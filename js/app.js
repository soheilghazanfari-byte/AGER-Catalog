// AGER Catalog Builder

const modelName = document.getElementById("modelName");
const previewName = document.getElementById("previewName");

const material = document.getElementById("material");
const previewMaterial = document.getElementById("previewMaterial");

const mainImage = document.getElementById("mainImage");
const productImage = document.getElementById("productImage");

const hero = document.getElementById("hero");
const thumb = document.getElementById("thumb");

const color = document.getElementById("color");
const previewColor = document.getElementById("previewColor");
// تغییر نام مدل
modelName.addEventListener("input", function () {
    previewName.textContent = this.value || "نام مدل";
});

// تغییر جنس
material.addEventListener("change", function () {
    previewMaterial.textContent = this.value;
});

// نمایش عکس اصلی
mainImage.addEventListener("change", function (e) {

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {

        hero.innerHTML = "";

        const img = document.createElement("img");

        img.src = event.target.result;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";

        hero.appendChild(img);

    };

    reader.readAsDataURL(file);

});

// نمایش عکس محصول
productImage.addEventListener("change", function (e) {

    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (event) {

        thumb.innerHTML = "";

        const img = document.createElement("img");

        img.src = event.target.result;
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";

        thumb.appendChild(img);

    };

    reader.readAsDataURL(file);

});
const sizeBoxes = document.querySelectorAll(".sizes input");

const previewSizes = document.getElementById("previewSizes");

function updateSizes(){

const selected=[];

sizeBoxes.forEach(box=>{

if(box.checked){

selected.push(box.value);

}

});

previewSizes.textContent="سایزها: "+selected.join(" | ");

}

sizeBoxes.forEach(box=>{

box.addEventListener("change",updateSizes);

});

updateSizes();
// =======================
// رنگ های هر جنس
// =======================

const materialColors = {

    "استیل 304 دست ساز": [
        "سیلور",
        "طلایی PVD",
        "مشکی مات استاتیک"
    ],

    "استیل 304 پرسی": [
        "سیلور",
        "طلایی PVD",
        "مشکی مات استاتیک"
    ],

    "ABS/استیل": [
        "سیلور",
        "طلایی PVD",
        "مشکی مات استاتیک"
    ],

    "برنجی": [
        "طلایی براق",
        "طلایی مات",
        "رزگلد",
        "زیتونی",
        "سفید",
        "مشکی"
    ]

};

// پر کردن لیست رنگ ها
function updateColorOptions() {

    color.innerHTML = "";

    const colors = materialColors[material.value];

    colors.forEach(function(item){

        const option = document.createElement("option");

        option.value = item;

        option.textContent = item;

        color.appendChild(option);

    });

    previewColor.textContent = color.value;

}

// تغییر جنس
material.addEventListener("change", function(){

    previewMaterial.textContent = material.value;

    updateColorOptions();

});

// تغییر رنگ
color.addEventListener("change", function(){

    previewColor.textContent = color.value;

});

// بارگذاری اولیه
updateColorOptions();