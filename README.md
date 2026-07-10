# AGER-Catalog
<!DOCTYPE html>
<html lang="fa" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>AGER Catalog Builder</title>

    <link rel="stylesheet" href="style.css">
<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>

<body>

    <header class="header">

        <div class="logo">
            AGER
        </div>

        <div class="title">
            AGER Catalog Builder
        </div>

    </header>


    <div class="container">

        <!-- پنل سمت چپ -->

        <aside class="sidebar">

            <h2>اطلاعات محصول</h2>

            <label>نام مدل</label>
            <input type="text" id="model" placeholder="مثلاً ویو">

            <label>جنس</label>

            <select id="material">

                <option>استیل 304 دست ساز</option>

                <option>استیل 304 پرسی</option>

                <option>برنجی</option>

                <option>استیل پلاستیک</option>

            </select>


            <label>رنگ ها</label>

            <div class="checkbox">

                <label><input type="checkbox" checked> سیلور</label>

                <label><input type="checkbox" checked> طلایی PVD</label>

                <label><input type="checkbox" checked> مشکی استاتیک</label>

            </div>


            <label>عکس اصلی</label>

            <input type="file" id="mainImage" accept="image/*">


            <label>عکس محصول</label>

            <input type="file" id="smallImage" accept="image/*">


            <button id="build">
                ساخت کاتالوگ
            </button>

        </aside>



        <!-- پیش نمایش -->

        <main class="preview">

            <div class="paper">

                <div class="catalog-header">

                    <h1>AGER</h1>

                </div>


                <div class="big-photo">

                    عکس اصلی

                </div>


                <div class="bottom">

                    <div class="small-photo">

                        عکس محصول

                    </div>


                    <div class="info">

                        <h2 id="previewModel">
                            نام مدل
                        </h2>

                        <p>
                            استیل 304 دست ساز
                        </p>

                        <p>
                            دارای سوپاپ (سوسکگیر)
                        </p>

                        <p>

                            سایزها

                        </p>

                        <p>

                            10×10

                            30

                            40

                            50

                            60

                            70

                            80

                            90

                            100

                            110

                            120

                        </p>

                    </div>

                </div>

            </div>

        </main>

    </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="script.js"></script>

</body>
</html>