/* =====================================
   AGER Catalog Builder
   colors.js

   Material Based Color Manager
===================================== */


const AGER_COLORS = {


    steel304: [

        {
            id: "silver",
            name: "Silver",
            title: "نقره‌ای"
        },


        {
            id: "gold-pvd",
            name: "Gold PVD",
            title: "طلایی PVD"
        },


        {
            id: "black-matte",
            name: "Matte Black",
            title: "مشکی مات"
        }


    ],



    brass: [

        {
            id: "brass-natural",
            name: "Natural Brass",
            title: "برنج طبیعی"
        },


        {
            id: "gold-pvd",
            name: "Gold PVD",
            title: "طلایی PVD"
        },


        {
            id: "black",
            name: "Black Finish",
            title: "مشکی"
        }


    ]

};





/* =====================================
   ELEMENTS
===================================== */


const materialSelect =
document.getElementById("materialSelect");


const colorSelect =
document.getElementById("colorSelect");





/* =====================================
   LOAD COLORS BY MATERIAL
===================================== */


function loadColors(material){


    if(!colorSelect)
        return;



    colorSelect.innerHTML="";



    if(!material || !AGER_COLORS[material]){


        colorSelect.innerHTML =
        `
        <option>
        ابتدا جنس را انتخاب کنید
        </option>
        `;


        return;

    }




    AGER_COLORS[material]
    .forEach(color=>{


        const option =
        document.createElement("option");


        option.value =
        color.id;


        option.textContent =
        color.title;


        option.dataset.name =
        color.name;


        colorSelect.appendChild(option);



    });



    colorSelect.dispatchEvent(
        new Event("change")
    );

}







/* =====================================
   MATERIAL CHANGE EVENT
===================================== */


if(materialSelect){


    materialSelect.addEventListener(
        "change",
        function(){


            loadColors(
                this.value
            );


        }
    );


}








/* =====================================
   COLOR CHANGE EVENT
===================================== */


if(colorSelect){


    colorSelect.addEventListener(
        "change",
        function(){


            const selected =
            this.options[
                this.selectedIndex
            ];



            const showColor =
            document.getElementById(
                "showColor"
            );



            if(showColor && selected){


                showColor.textContent =
                selected.textContent;


            }



            document.dispatchEvent(

                new CustomEvent(
                    "agerColorChanged",
                    {

                        detail:{

                            id:this.value,

                            name:
                            selected.dataset.name

                        }

                    }

                )

            );



        }
    );

}







/* =====================================
   PUBLIC API
===================================== */


window.AGER_COLORS =
AGER_COLORS;


window.loadAGERColors =
loadColors;