/* =====================================
   AGER Catalog Builder
   colors.js (Version 2)
===================================== */

const AGER_COLORS = {

    steel304: [
        "سیلور",
        "طلایی PVD",
        "مشکی"
    ],

    abssteel: [
        "سیلور",
        "طلایی PVD",
        "مشکی"
    ],

    brass: [
        "سیلور",
        "طلایی مات",
        "طلایی براق",
        "کرم براق",
        "مشکی",
        "سفید",
        "رزگلد",
        "زیتونی"
    ]

};

const materialSelect =
document.getElementById("materialSelect");

const colorSelect =
document.getElementById("colorSelect");

const showColor =
document.getElementById("showColor");



/* =====================================
   بارگذاری رنگ‌ها
===================================== */

function loadColors(){

    if(!materialSelect || !colorSelect)
        return;

    const material = materialSelect.value;

    colorSelect.innerHTML="";

    if(!AGER_COLORS[material]){

        const option =
        document.createElement("option");

        option.textContent="ابتدا جنس را انتخاب کنید";

        option.value="";

        colorSelect.appendChild(option);

        return;

    }

    AGER_COLORS[material].forEach(color=>{

        const option =
        document.createElement("option");

        option.value=color;

        option.textContent=color;

        colorSelect.appendChild(option);

    });

    colorSelect.selectedIndex=0;

    showColor.textContent=colorSelect.value;

}






/* =====================================
   تغییر جنس
===================================== */

materialSelect.addEventListener(
"change",
function(){

    loadColors();

});






/* =====================================
   تغییر رنگ
===================================== */

colorSelect.addEventListener(
"change",
function(){

    showColor.textContent=this.value;

    document.dispatchEvent(

        new CustomEvent(

            "agerColorChanged",

            {

                detail:{

                    color:this.value

                }

            }

        )

    );

});






/* =====================================
   شروع برنامه
===================================== */

document.addEventListener(
"DOMContentLoaded",
function(){

    loadColors();

});






/* =====================================
   Public API
===================================== */

window.AGER_COLORS = AGER_COLORS;

window.loadAGERColors = loadColors;