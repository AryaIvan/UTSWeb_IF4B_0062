$(document).ready(function () {

  $("#darkModeBtn").on("click", function () {
    $("body").toggleClass("dark-mode");

    if ($("body").hasClass("dark-mode")) {
      $("#darkModeBtn").html('<i class="bi bi-sun"></i>');
    } else {
      $("#darkModeBtn").html('<i class="bi bi-moon-stars"></i>');
    }
  });

  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    const filterValue = $(this).data("filter");

    if (filterValue === "all") {
      $(".product-item").fadeIn();
    } else {
      $(".product-item").hide();
      $('.product-item[data-category="' + filterValue + '"]').fadeIn();
    }
  });

  $(".counter").each(function () {
    const counter = $(this);
    const target = parseInt(counter.attr("data-target"));
    let count = 0;
    const speed = 30;

    const updateCounter = setInterval(function () {
      if (count < target) {
        count++;

        if (counter.hasClass("rating-counter")) {
          counter.text((count / 10).toFixed(1));
        } else {
          counter.text(count + "+");
        }
      } else {
        clearInterval(updateCounter);
      }
    }, speed);
  });

  const testimonials = [
    {
      text: "“Kaosnya nyaman banget dipakai, desainnya simple tapi punya makna.”",
      name: "Raka Pratama",
      role: "Customer"
    },
    {
      text: "“Suka sama konsep brand-nya. Think.ing bukan cuma jual kaos, tapi juga punya pesan.”",
      name: "Dimas Arya",
      role: "Customer"
    },
    {
      text: "“Bahannya adem, cocok buat kuliah, nongkrong, atau daily outfit.”",
      name: "Fajar Ramadhan",
      role: "Customer"
    }
  ];

  let testimonialIndex = 0;

  function showTestimonial(index) {
    $("#testimonialText").fadeOut(200, function () {
      $(this).text(testimonials[index].text).fadeIn(200);
    });

    $("#testimonialName").text(testimonials[index].name);
    $("#testimonialRole").text(testimonials[index].role);
  }

  $("#nextTestimonial").on("click", function () {
    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {
      testimonialIndex = 0;
    }

    showTestimonial(testimonialIndex);
  });

  $("#prevTestimonial").on("click", function () {
    testimonialIndex--;

    if (testimonialIndex < 0) {
      testimonialIndex = testimonials.length - 1;
    }

    showTestimonial(testimonialIndex);
  });

  $("#orderForm").on("submit", function (e) {
    e.preventDefault();

    const nama = $("#nama").val().trim();
    const whatsapp = $("#whatsapp").val().trim();
    const produk = $("#produk").val();
    const ukuran = $("#ukuran").val();
    const pesan = $("#pesan").val().trim();

    if (nama === "" || whatsapp === "" || produk === "" || ukuran === "") {
      $("#formAlert")
        .removeClass("text-success")
        .addClass("text-danger")
        .text("Mohon lengkapi nama, nomor WhatsApp, produk, dan ukuran terlebih dahulu.");

      return;
    }

    $("#formAlert")
      .removeClass("text-danger")
      .addClass("text-success")
      .text("Pesanan berhasil dibuat! Tim Think.ing akan segera menghubungi kamu.");

    console.log({
      nama: nama,
      whatsapp: whatsapp,
      produk: produk,
      ukuran: ukuran,
      pesan: pesan
    });

    $("#orderForm")[0].reset();
  });

});