// ===============================
// AGER Catalog Builder
// ===============================

// عناصر صفحه
const modelName = document.getElementById("modelName");
const previewName = document.getElementById("previewName");

const material = document.getElementById("material");
const previewMaterial = document.getElementById("previewMaterial");

const color = document.getElementById("color");
const previewColor = document.getElementById("previewColor");

const mainImage = document.getElementById("mainImage");
const productImage = document.getElementById("productImage");

const hero = document.getElementById("hero");
const thumb = document.getElementById("thumb");

const previewSizes = document.getElementById("previewSizes");
const sizeBoxes = document.querySelectorAll(".sizes input");

// ===============================
// نام مدل
// ===============================

modelName.addEventListener("input", () => {
    previewName.textContent =
        modelName.value.trim() || "نام مدل";
});

// ===============================
// رنگ های هر جنس
// ===============================

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

// ===============================
// بروزرسانی لیست رنگ
// ===============================

function updateColorOptions() {

    previewMaterial.textContent = material.value;

    color.innerHTML = "";

    const colors = materialColors[material.value] || [];

    colors.forEach(c => {

        const option = document.createElement("option");

        option.value = c;
        option.textContent = c;

        color.appendChild(option);

    });

    previewColor.textContent = color.value;

}

material.addEventListener("change", updateColorOptions);

color.addEventListener("change", () => {

    previewColor.textContent = color.value;

});

// ===============================
// سایزها
// ===============================

function updateSizes() {

    const selected = [];

    sizeBoxes.forEach(box => {

        if (box.checked) {

            selected.push(box.value);

        }

    });

    if (selected.length === 0) {

        previewSizes.textContent = "";

    } else {

        previewSizes.textContent =
            "سایزها: " + selected.join(" | ");

    }

}

sizeBoxes.forEach(box => {

    box.addEventListener("change", updateSizes);

});

// ===============================
// عکس اصلی
// ===============================

mainImage.addEventListener("change", e => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = ev => {

        hero.innerHTML = "";

        const img = document.createElement("img");

        img.src = ev.target.result;

        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";

        hero.appendChild(img);

    };

    reader.readAsDataURL(file);

});

// ===============================
// عکس محصول
// ===============================

productImage.addEventListener("change", e => {

    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = ev => {

        thumb.innerHTML = "";

        const img = document.createElement("img");

        img.src = ev.target.result;

        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";

        thumb.appendChild(img);

    };

    reader.readAsDataURL(file);

});

// ===============================
// شروع برنامه
// ===============================

updateColorOptions();
updateSizes();