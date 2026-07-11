// ======================================
// AGER Catalog Builder
// app.js
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const modelName = document.getElementById("modelName");
    const material = document.getElementById("material");
    const color = document.getElementById("color");

    const previewName = document.getElementById("previewName");
    const previewMaterial = document.getElementById("previewMaterial");
    const previewColor = document.getElementById("previewColor");

    // لیست جنس ها

    const materials = [

        "استیل 304 دست ساز",

        "استیل 304 پرسی",

        "ABS/استیل",

        "برنجی"

    ];

    material.innerHTML = "";

    materials.forEach(item=>{

        const option=document.createElement("option");

        option.value=item;

        option.textContent=item;

        material.appendChild(option);

    });

    // نام مدل

    modelName.addEventListener("input",()=>{

        if(modelName.value.trim()==""){

            previewName.textContent="نام مدل";

        }else{

            previewName.textContent=modelName.value;

        }

    });

    // مقدار اولیه

    previewMaterial.textContent=material.value;

    // راه اندازی فایل ها

    loadColors();

    loadSizes();

    loadImages();
    // تغییر جنس در پیش‌نمایش
    material.addEventListener("change", () => {

        previewMaterial.textContent = material.value;

    });

    // تغییر رنگ در پیش‌نمایش
    color.addEventListener("change", () => {

        previewColor.textContent = color.value;

    });

    // مقدار اولیه
    previewName.textContent = "نام مدل";
    previewMaterial.textContent = material.value;
});