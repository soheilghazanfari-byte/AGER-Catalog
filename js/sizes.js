/* =====================================
   AGER Catalog Builder
   sizes.js

   Product Size Manager
===================================== */



const AGER_SIZES = {


    square:[

        {
            id:"10x10",
            title:"10 × 10 سانتی متر"
        },


        {
            id:"15x15",
            title:"15 × 15 سانتی متر"
        },


        {
            id:"20x20",
            title:"20 × 20 سانتی متر"
        }

    ],



    linear:[

        {
            id:"30",
            title:"30 سانتی متر"
        },


        {
            id:"40",
            title:"40 سانتی متر"
        },


        {
            id:"50",
            title:"50 سانتی متر"
        },


        {
            id:"60",
            title:"60 سانتی متر"
        },


        {
            id:"70",
            title:"70 سانتی متر"
        },


        {
            id:"80",
            title:"80 سانتی متر"
        },


        {
            id:"90",
            title:"90 سانتی متر"
        },


        {
            id:"100",
            title:"100 سانتی متر"
        },


        {
            id:"110",
            title:"110 سانتی متر"
        },


        {
            id:"120",
            title:"120 سانتی متر"
        }

    ],




    custom:[

        {
            id:"custom",
            title:"سایز سفارشی"
        }

    ]

};







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


function loadSizes(model){


    if(!sizeSelect)
        return;



    sizeSelect.innerHTML="";



    let sizes=[];



    if(
        model==="linear"
    ){

        sizes =
        AGER_SIZES.linear;

    }



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


productModel.addEventListener(
"change",
function(){


    loadSizes(
        this.value
    );


});


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