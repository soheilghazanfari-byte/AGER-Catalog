// =====================================
// AGER Catalog Builder v2
// app.js
// =====================================

// محل ساخت برنامه
const app = document.getElementById("app");

// ساخت رابط کاربری
app.innerHTML = `
<div class="sidebar">

    <h1>AGER</h1>
    <p>Catalog Builder</p>

    <label>نام مدل</label>
    <input type="text" id="modelName" placeholder="مثلاً زیگزاگ">

    <label>جنس</label>
    <select id="material">
        <option>استیل 304 دست ساز</option>
        <option>استیل 304 پرسی</option>
        <option>ABS/استیل</option>
        <option>برنجی</option>
    </select>

    <label>رنگ</label>
    <select id="color"></select>

    <label>سایزها</label>

    <div id="sizes"></div>

    <button id="selectAll">
        انتخاب همه سایزها
    </button>

    <button id="clearAll">
        حذف همه
    </button>

    <label>عکس محیط</label>

    <input type="file"
           id="heroInput"
           accept="image/*">

    <label>عکس محصول</label>

    <input type="file"
           id="productInput"
           accept="image/*">

</div>

<div class="workspace">

<div class="page">

<div class="header">

<h1>AGER</h1>

<p>Premium Floor Drain</p>

</div>

<div class="hero" id="hero">

عکس محیط

</div>

<div class="content">

<div class="thumb" id="thumb">

عکس محصول

</div>

<div class="details">

<h2 id="previewName">

نام مدل

</h2>

<p>

<strong>جنس :</strong>

<span id="previewMaterial">

استیل 304 دست ساز

</span>

</p>

<p>

<strong>رنگ :</strong>

<span id="previewColor">

سیلور

</span>

</p>

<p id="previewSizes"></p>

<p>

<strong>

دارای سوپاپ (سوسکگیر)

</strong>

</p>

</div>

</div>

<div class="footer">

<div>

AGER

</div>

<div>

Instagram : @ager.co

</div>

<div>

09121974421

<br>

09125483963

</div>

</div>

</div>

</div>
`;
// ==============================
// شروع برنامه
// ==============================

loadColors();
loadSizes();
loadImages();