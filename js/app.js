// AGER Catalog Builder

const modelName = document.getElementById("modelName");
const previewName = document.getElementById("previewName");

const material = document.getElementById("material");
const previewMaterial = document.getElementById("previewMaterial");

const mainImage = document.getElementById("mainImage");
const productImage = document.getElementById("productImage");

const hero = document.getElementById("hero");
const thumb = document.getElementById("thumb");

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
