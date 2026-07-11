// =====================================
// export.js
// =====================================

function initExport() {

    const pngBtn = document.getElementById("exportPNG");
    const pdfBtn = document.getElementById("exportPDF");

    if (pngBtn) {
        pngBtn.addEventListener("click", () => {
            alert("خروجی PNG در مرحله بعد اضافه می‌شود.");
        });
    }

    if (pdfBtn) {
        pdfBtn.addEventListener("click", () => {
            alert("خروجی PDF در مرحله بعد اضافه می‌شود.");
        });
    }

}