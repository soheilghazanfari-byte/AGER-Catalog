// =====================================
// images.js
// =====================================

function loadImages() {

    const heroInput = document.getElementById("heroInput");
    const productInput = document.getElementById("productInput");

    const hero = document.getElementById("hero");
    const thumb = document.getElementById("productImage");

    // عکس محیط
    heroInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            hero.innerHTML = "";

            const img = document.createElement("img");

            img.src = e.target.result;

            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "cover";
            img.style.borderRadius = "0";

            hero.appendChild(img);

        };

        reader.readAsDataURL(file);

    });

    // عکس محصول
    productInput.addEventListener("change", function () {

        const file = this.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = function (e) {

            thumb.innerHTML = "";

            const img = document.createElement("img");

            img.src = e.target.result;

            img.style.width = "100%";
            img.style.height = "100%";
            img.style.objectFit = "contain";

            thumb.appendChild(img);

        };

        reader.readAsDataURL(file);

    });

}
