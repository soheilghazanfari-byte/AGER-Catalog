/* =====================================
   AGER Catalog Builder
   sizes.js  (Version 2)
===================================== */

const AGER_SIZES = [

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
    "120",
    "سفارشی"

];

const sizeSelect =
document.getElementById("sizeSelect");

const showSize =
document.getElementById("showSize");



/* =====================================
   ساخت گزینه سفارشی
===================================== */

let customSizeInput =
document.getElementById("customSize");

if(!customSizeInput){

    customSizeInput =
    document.createElement("input");

    customSizeInput.type="text";

    customSizeInput.id="customSize";

    customSizeInput.placeholder="مثلاً 75 یا 15×15";

    customSizeInput.style.display="none";

    customSizeInput.style.marginTop="10px";

    customSizeInput.className="custom-size-input";

    sizeSelect.parentNode.appendChild(customSizeInput);

}





/* =====================================
   بارگذاری سایزها
===================================== */

function loadSizes(){

    if(!sizeSelect)
        return;

    sizeSelect.innerHTML="";

    AGER_SIZES.forEach(size=>{

        const option =
        document.createElement("option");

        option.value=size;

        option.textContent=size;

        sizeSelect.appendChild(option);

    });

}






/* =====================================
   انتخاب سایز
===================================== */

sizeSelect.addEventListener(
"change",
function(){

    const value=this.value;

    if(value==="سفارشی"){

        customSizeInput.style.display="block";

        showSize.textContent="-";

    }

    else{

        customSizeInput.style.display="none";

        customSizeInput.value="";

        showSize.textContent=value;

        document.dispatchEvent(

            new CustomEvent(

                "agerSizeChanged",

                {

                    detail:{

                        id:value,

                        title:value

                    }

                }

            )

        );

    }

});







/* =====================================
   سایز سفارشی
===================================== */

customSizeInput.addEventListener(
"input",
function(){

    showSize.textContent=this.value;

    document.dispatchEvent(

        new CustomEvent(

            "agerSizeChanged",

            {

                detail:{

                    id:"custom",

                    title:this.value

                }

            )

        )

    );

});







/* =====================================
   شروع برنامه
===================================== */

document.addEventListener(
"DOMContentLoaded",
function(){

    loadSizes();

});






/* =====================================
   PUBLIC API
===================================== */

window.AGER_SIZES=AGER_SIZES;

window.loadAGERSizes=loadSizes;