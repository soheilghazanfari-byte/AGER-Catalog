/* =====================================
   AGER Catalog Builder
   sizes.js

   Product Size Manager
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
/* =====================================
   ELEMENTS
===================================== */


const productModel =
document.getElementById(
    "productModel"
);


const sizeSelect =
document.getElementById(
    "sizeSelect"
);







/* =====================================
   LOAD SIZE LIST
===================================== */


function loadSizes() {

    sizeSelect.innerHTML = "";

    AGER_SIZES.forEach(size => {

        const option = document.createElement("option");

        option.value = size;

        option.textContent = size;

        sizeSelect.appendChild(option);

    });

}}



    else if(
        model==="square" ||
        model==="zigzag"
    ){

        sizes =
        AGER_SIZES.square;

    }



    else if(
        model==="custom"
    ){

        sizes =
        AGER_SIZES.custom;

    }




    else{


        sizeSelect.innerHTML =
        `
        <option>
        ابتدا مدل را انتخاب کنید
        </option>
        `;


        return;

    }







    sizes.forEach(size=>{


        const option =
        document.createElement(
            "option"
        );



        option.value =
        size.id;



        option.textContent =
        size.title;



        sizeSelect.appendChild(
            option
        );



    });



    sizeSelect.dispatchEvent(
        new Event("change")
    );

}








/* =====================================
   MODEL CHANGE
===================================== */


if(productModel){





}








/* =====================================
   SIZE CHANGE
===================================== */


if(sizeSelect){


sizeSelect.addEventListener(
"change",
function(){



    const selected =
    this.options[
        this.selectedIndex
    ];



    const showSize =
    document.getElementById(
        "showSize"
    );



    if(showSize && selected){


        showSize.textContent =
        selected.textContent;


    }




    document.dispatchEvent(

        new CustomEvent(
            "agerSizeChanged",
            {

                detail:{

                    id:this.value,

                    title:
                    selected.textContent

                }

            }

        )

    );



});


}








/* =====================================
   PUBLIC ACCESS
===================================== */


window.AGER_SIZES =
AGER_SIZES;


window.loadAGERSizes =
loadSizes;
document.addEventListener("DOMContentLoaded", () => {

    loadSizes();

});