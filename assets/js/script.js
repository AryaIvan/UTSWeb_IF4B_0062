$(document).ready(function () {

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

});