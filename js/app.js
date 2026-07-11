// ==============================
// AGER Catalog Builder
// app.js
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    alert("app.js اجرا شد");

loadColors();
loadSizes();
loadImages();
initExport();
    ...
});

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