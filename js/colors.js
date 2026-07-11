// =====================================
// colors.js
// =====================================

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

function loadColors() {

    const material = document.getElementById("material");
    const color = document.getElementById("color");
    const previewMaterial = document.getElementById("previewMaterial");
    const previewColor = document.getElementById("previewColor");

    function updateColors() {

        previewMaterial.textContent = material.value;

        color.innerHTML = "";

        materialColors[material.value].forEach(item => {

            const option = document.createElement("option");

            option.value = item;
            option.textContent = item;

            color.appendChild(option);

        });

        previewColor.textContent = color.value;

    }

    material.addEventListener("change", updateColors);

    color.addEventListener("change", () => {

        previewColor.textContent = color.value;

    });

    updateColors();

}
