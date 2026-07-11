/* =====================================
   AGER Catalog Builder
   export.js

   PNG + PDF Export Manager
===================================== */



const a4Page =
document.getElementById(
"a4Page"
);



const exportPngBtn =
document.getElementById(
"exportPngBtn"
);



const exportPdfBtn =
document.getElementById(
"exportPdfBtn"
);








/* =====================================
   EXPORT PNG
===================================== */


async function exportPNG(){



if(!a4Page)
return;



try{


const canvas =
await html2canvas(

a4Page,

{

scale:4,


useCORS:true,


allowTaint:true,


backgroundColor:"#ffffff"


}

);





const link =
document.createElement(
"a"
);



link.download =
"AGER-Catalog.png";



link.href =
canvas.toDataURL(
"image/png",
1.0
);



link.click();



showExportMessage(
"تصویر PNG آماده شد"
);



}

catch(error){


console.error(error);


showExportMessage(
"خطا در ساخت PNG"
);


}


}









/* =====================================
   EXPORT PDF
===================================== */


async function exportPDF(){



if(!a4Page)
return;



try{



const canvas =
await html2canvas(

a4Page,

{

scale:4,


useCORS:true,


allowTaint:true,


backgroundColor:"#ffffff"


}

);





const imageData =
canvas.toDataURL(
"image/png",
1.0
);






const {

jsPDF

} =
window.jspdf;





const pdf =
new jsPDF(

{

orientation:
"portrait",


unit:
"mm",


format:
"A4"


}

);







const pageWidth =
210;



const pageHeight =
297;



pdf.addImage(

imageData,

"PNG",

0,

0,

pageWidth,

pageHeight

);





pdf.save(
"AGER-Catalog.pdf"
);





showExportMessage(
"فایل PDF آماده شد"
);



}

catch(error){


console.error(error);


showExportMessage(
"خطا در ساخت PDF"
);


}


}








/* =====================================
   BUTTON EVENTS
===================================== */


if(exportPngBtn){


exportPngBtn.addEventListener(

"click",

exportPNG

);


}




if(exportPdfBtn){


exportPdfBtn.addEventListener(

"click",

exportPDF

);


}








/* =====================================
   MESSAGE
===================================== */


function showExportMessage(text){



const status =
document.getElementById(
"statusMessage"
);



if(status){


status.textContent =
text;



setTimeout(()=>{


status.textContent =
"آماده طراحی کاتالوگ AGER";


},3000);



}



}








/* =====================================
   PUBLIC API
===================================== */


window.AGER_EXPORT = {


png:
exportPNG,


pdf:
exportPDF


};