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

});