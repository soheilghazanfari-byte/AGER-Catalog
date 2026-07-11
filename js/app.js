// ==============================
// AGER Catalog Builder
// app.js
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    loadColors();
    loadSizes();
    loadImages();

    const modelInput = document.getElementById("modelName");
    const previewName = document.getElementById("previewName");

    modelInput.addEventListener("input", () => {

        if (modelInput.value.trim() === "") {

            previewName.textContent = "نام مدل";

        } else {

            previewName.textContent = modelInput.value;

        }

    });

});