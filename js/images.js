/* =====================================
   AGER Catalog Builder
   images.js

   Image Upload + Transform Manager
===================================== */



const environmentUpload =
document.getElementById(
    "environmentUpload"
);


const productUpload =
document.getElementById(
    "productUpload"
);



const environmentLayer =
document.getElementById(
    "environmentLayer"
);



const productImage =
document.getElementById(
    "productImage"
);



const productLayer =
document.getElementById(
    "productLayer"
);



const zoomControl =
document.getElementById(
    "zoomControl"
);



const rotateControl =
document.getElementById(
    "rotateControl"
);



const opacityControl =
document.getElementById(
    "opacityControl"
);





/* =====================================
   IMAGE VARIABLES
===================================== */


let productScale = 1;

let productRotate = 0;

let productOpacity = 1;



let position = {

    x:0,

    y:0

};



let dragging = false;


let startPosition = {

    x:0,

    y:0

};







/* =====================================
   ENVIRONMENT IMAGE UPLOAD
===================================== */


if(environmentUpload){


environmentUpload.addEventListener(
"change",
function(e){


    const file =
    e.target.files[0];


    if(!file)
        return;



    const reader =
    new FileReader();



    reader.onload =
    function(event){


        environmentLayer.style.backgroundImage =
        `url(${event.target.result})`;



        document.dispatchEvent(

            new CustomEvent(
                "agerEnvironmentLoaded"
            )

        );

    };



    reader.readAsDataURL(file);



});


}








/* =====================================
   PRODUCT IMAGE UPLOAD
===================================== */


if(productUpload){


productUpload.addEventListener(
"change",
function(e){


const file =
e.target.files[0];


if(!file)
return;



const reader =
new FileReader();




reader.onload =
function(event){


    productImage.src =
    event.target.result;



    productLayer.style.display =
    "block";



    resetProductTransform();



    document.dispatchEvent(

        new CustomEvent(
            "agerProductLoaded"
        )

    );


};




reader.readAsDataURL(file);



});


}








/* =====================================
   DRAG SYSTEM
===================================== */


function startDrag(e){


dragging=true;



const point =
getPoint(e);



startPosition.x =
point.x - position.x;


startPosition.y =
point.y - position.y;



}




function dragMove(e){


if(!dragging)
return;



const point =
getPoint(e);



position.x =
point.x - startPosition.x;



position.y =
point.y - startPosition.y;



updateTransform();



}



function stopDrag(){


dragging=false;


}







function getPoint(e){



if(e.touches){


return {

x:e.touches[0].clientX,

y:e.touches[0].clientY

};


}



return {


x:e.clientX,

y:e.clientY


};



}








if(productLayer){



productLayer.addEventListener(
"mousedown",
startDrag
);



document.addEventListener(
"mousemove",
dragMove
);



document.addEventListener(
"mouseup",
stopDrag
);





productLayer.addEventListener(
"touchstart",
startDrag
);



document.addEventListener(
"touchmove",
dragMove
);



document.addEventListener(
"touchend",
stopDrag
);



}








/* =====================================
   TRANSFORM UPDATE
===================================== */


function updateTransform(){


productLayer.style.transform =

`
translate(
calc(-50% + ${position.x}px),
calc(-50% + ${position.y}px)
)

scale(${productScale})

rotate(${productRotate}deg)

`;



}








/* =====================================
   ZOOM
===================================== */


if(zoomControl){


zoomControl.addEventListener(
"input",
function(){



productScale =
this.value / 100;



updateTransform();



});


}








/* =====================================
   ROTATE
===================================== */


if(rotateControl){


rotateControl.addEventListener(
"input",
function(){



productRotate =
this.value;



updateTransform();



});


}








/* =====================================
   OPACITY
===================================== */


if(opacityControl){


opacityControl.addEventListener(
"input",
function(){



productOpacity =
this.value / 100;



productImage.style.opacity =
productOpacity;



});


}








/* =====================================
   RESET
===================================== */


function resetProductTransform(){



productScale=1;


productRotate=0;


productOpacity=1;



position={

x:0,

y:0

};



if(productImage){


productImage.style.opacity=1;


}



if(zoomControl)
zoomControl.value=100;



if(rotateControl)
rotateControl.value=0;



if(opacityControl)
opacityControl.value=100;



updateTransform();



}








/* =====================================
   PUBLIC API
===================================== */


window.AGER_IMAGE = {


reset:
resetProductTransform,


update:
updateTransform


};