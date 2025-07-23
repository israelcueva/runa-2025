
     Deslizante con Swiper
     
     <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>mariano</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />

  <style>
    body {
      margin: 0;
      font-family: sans-serif;
      background: #f5f5f5;
    }

    .swiper {
      width: 90%;
      height: 650px;
      margin: 50px auto;
      border-radius: 30px;
      overflow: hidden;
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
    }

    .swiper-slide {
      text-align: center;
      font-size: 24px;
      background: #fff;

      /* Centra el contenido */
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .swiper-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  </style>
</head>
<body>

  <!-- Swiper -->
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide"><img src="https://wallpapers.com/images/hd/1080-fortnite-1920-x-1080-jalsaqd4b2st25iw.jpg" alt= /></div>
      <div class="swiper-slide"><img src="https://i0.wp.com/www.pcmrace.com/wp-content/uploads/2023/09/eFootball2024_MainVisual_Messi.jpg" alt=/></div>
      <div class="swiper-slide"><img src="https://i.redd.it/q5kub8xusv331.jpg" alt=/></div>
    </div>
    
    <!-- Botones -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>

    <!-- Paginación -->
    <div class="swiper-pagination"></div>
  </div>

  <!-- Swiper JS -->
  <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

  <!-- Inicialización -->
  <script>
    const swiper = new Swiper('.swiper', {
      loop: true,
      
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  </script>
</body>
</html>
