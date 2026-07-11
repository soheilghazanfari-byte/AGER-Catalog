// =====================================
// sizes.js
// =====================================

const sizes = [
    "10×10",
    "30",
    "40",
    "50",
    "60",
    "70",
    "80",
    "90",
    "100",
    "110",
    "120"
];

function loadSizes() {

    const container = document.getElementById("sizes");
    const preview = document.getElementById("previewSizes");

    container.innerHTML = "";

    sizes.forEach(size => {

        const label = document.createElement("label");

        label.style.display = "block";
        label.style.marginBottom = "6px";

        label.innerHTML = `
            <input type="checkbox" value="${size}">
            ${size}
        `;

        container.appendChild(label);

    });

    const checkboxes = container.querySelectorAll("input");

    function updatePreview() {

        const selected = [];

        checkboxes.forEach(box => {

            if(box.checked){

                selected.push(box.value);

            }

        });

        preview.textContent =
            selected.length
            ? "سایزها : " + selected.join(" - ")
            : "";

    }

    checkboxes.forEach(box=>{

        box.addEventListener("change",updatePreview);

    });

    document
    .getElementById("selectAll")
    .addEventListener("click",()=>{

        checkboxes.forEach(box=>{

            box.checked=true;

        });

        updatePreview();

    });

    document
    .getElementById("clearAll")
    .addEventListener("click",()=>{

        checkboxes.forEach(box=>{

            box.checked=false;

        });

        updatePreview();

    });

    updatePreview();

}
