/* ==========================================
   AGER Catalog Builder
   app.js
   Version 3.0
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      ELEMENTS
    =========================*/

    const modelInput =
        document.getElementById("productModel");

    const materialSelect =
        document.getElementById("materialSelect");

    const colorSelect =
        document.getElementById("colorSelect");

    const sizeSelect =
        document.getElementById("sizeSelect");

    const customSize =
        document.getElementById("customSize");



    const showModel =
        document.getElementById("showModel");

    const showMaterial =
        document.getElementById("showMaterial");

    const showColor =
        document.getElementById("showColor");

    const showSize =
        document.getElementById("showSize");



    const status =
        document.getElementById("statusMessage");



    const qrContainer =
        document.getElementById("qrCode");



    const newProjectBtn =
        document.getElementById("newProjectBtn");

    const saveProjectBtn =
        document.getElementById("saveProjectBtn");



    /*=========================
      PROJECT DATA
    =========================*/

    const product = {

        model: "",

        material: "",

        color: "",

        size: ""

    };



    /*=========================
      STATUS
    =========================*/

    function setStatus(text) {

        if (!status) return;

        status.textContent = text;

        clearTimeout(status.timer);

        status.timer = setTimeout(() => {

            status.textContent =
                "آماده طراحی کاتالوگ AGER";

        }, 2500);

    }



    /*=========================
      MODEL
    =========================*/

    if (modelInput) {

        modelInput.addEventListener("input", function () {

            product.model =
                this.value.trim();

            if (showModel) {

                showModel.textContent =
                    product.model || "-";

            }

            updateQR();

        });

    }



    /*=========================
      MATERIAL
    =========================*/

    if (materialSelect) {

        materialSelect.addEventListener(
            "change",
            function () {

                product.material =
                    this.options[
                        this.selectedIndex
                    ].textContent;

                if (showMaterial) {

                    showMaterial.textContent =
                        product.material;

                }

                updateQR();

            });

    }



    /*=========================
      COLOR
    =========================*/

    if (colorSelect) {

        colorSelect.addEventListener(
            "change",
            function () {

                product.color =
                    this.value;

                if (showColor) {

                    showColor.textContent =
                        product.color || "-";

                }

                updateQR();

            });

    }



    /*=========================
      SIZE
    =========================*/

    if (sizeSelect) {

        sizeSelect.addEventListener(
            "change",
            function () {

                if (this.value === "سفارشی") {

                    if (customSize) {

                        customSize.style.display =
                            "block";

                        customSize.focus();

                    }

                    showSize.textContent = "-";

                    product.size = "";

                }

                else {

                    if (customSize) {

                        customSize.style.display =
                            "none";

                        customSize.value = "";

                    }

                    product.size = this.value;

                    showSize.textContent =
                        product.size;

                    updateQR();

                }

            });

    }
        /*=========================
      CUSTOM SIZE
    =========================*/

    if (customSize) {

        customSize.addEventListener(
            "input",
            function () {

                product.size =
                    this.value.trim();

                showSize.textContent =
                    product.size || "-";

                updateQR();

            });

    }



    /*=========================
      QR CODE
    =========================*/

    function updateQR() {

        if (!qrContainer) return;

        qrContainer.innerHTML = "";

        const qrText =

`AGER

مدل:
${product.model}

جنس:
${product.material}

رنگ:
${product.color}

سایز:
${product.size}

Instagram:
ager.co

09121974421
09125483963`;

        new QRCode(

            qrContainer,

            {

                text: qrText,

                width: 100,

                height: 100,

                correctLevel:
                    QRCode.CorrectLevel.H

            }

        );

    }




    /*=========================
      SAVE PROJECT
    =========================*/

    function saveProject() {

        localStorage.setItem(

            "AGER_PROJECT",

            JSON.stringify(product)

        );

        setStatus("پروژه ذخیره شد");

    }




    /*=========================
      LOAD PROJECT
    =========================*/

    function loadProject() {

        const data =
            localStorage.getItem(
                "AGER_PROJECT"
            );

        if (!data)
            return;

        const saved =
            JSON.parse(data);



        product.model =
            saved.model || "";

        product.material =
            saved.material || "";

        product.color =
            saved.color || "";

        product.size =
            saved.size || "";



        if (modelInput)
            modelInput.value =
                product.model;



        if (showModel)
            showModel.textContent =
                product.model || "-";



        if (showMaterial)
            showMaterial.textContent =
                product.material || "-";



        if (showColor)
            showColor.textContent =
                product.color || "-";



        if (showSize)
            showSize.textContent =
                product.size || "-";



        updateQR();

    }




    /*=========================
      NEW PROJECT
    =========================*/

    function newProject() {

        if (modelInput)
            modelInput.value = "";

        if (materialSelect)
            materialSelect.selectedIndex = 0;

        if (colorSelect)
            colorSelect.innerHTML =
                "<option>ابتدا جنس را انتخاب کنید</option>";

        if (sizeSelect)
            sizeSelect.selectedIndex = 0;

        if (customSize) {

            customSize.value = "";

            customSize.style.display =
                "none";

        }



        product.model = "";
        product.material = "";
        product.color = "";
        product.size = "";



        showModel.textContent = "-";
        showMaterial.textContent = "-";
        showColor.textContent = "-";
        showSize.textContent = "-";



        qrContainer.innerHTML = "";

        setStatus("پروژه جدید ایجاد شد");

    }




    /*=========================
      BUTTONS
    =========================*/

    if (saveProjectBtn) {

        saveProjectBtn.addEventListener(

            "click",

            saveProject

        );

    }



    if (newProjectBtn) {

        newProjectBtn.addEventListener(

            "click",

            newProject

        );

    }
        /*=========================
      COLOR EVENT
    =========================*/

    document.addEventListener(

        "agerColorChanged",

        function (e) {

            if (!e.detail) return;

            if (e.detail.color) {

                product.color =
                    e.detail.color;

            }

            else if (e.detail.name) {

                product.color =
                    e.detail.name;

            }

            if (showColor) {

                showColor.textContent =
                    product.color || "-";

            }

            updateQR();

        }

    );



    /*=========================
      SIZE EVENT
    =========================*/

    document.addEventListener(

        "agerSizeChanged",

        function (e) {

            if (!e.detail) return;

            if (e.detail.title) {

                product.size =
                    e.detail.title;

            }

            if (showSize) {

                showSize.textContent =
                    product.size || "-";

            }

            updateQR();

        }

    );



    /*=========================
      FIRST LOAD
    =========================*/

    loadProject();

    updateQR();

    setStatus("AGER Catalog Builder آماده است.");



    /*=========================
      PUBLIC API
    =========================*/

    window.AGER_APP = {

        product,

        updateQR,

        saveProject,

        loadProject,

        newProject,

        setStatus

    };

});