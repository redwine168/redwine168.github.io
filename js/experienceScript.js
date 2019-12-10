

$(function () {
    // when mouse enters an image, add wrappedElement class to it
    $("img").mouseenter(function (event) {
        $(this).addClass("wrappedElement");
    });

    // when mouse leaves an image, remove wrappedElement class from it
    $("img").mouseleave(function (event) {
        $(this).removeClass("wrappedElement");
    })
})
