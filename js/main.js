$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

$(document).ready(function () {
  $("#postLoader").hide();
  setTimeout(function () {
    $("#preLoader").hide();
    $("#postLoader").show();
  }, 2000);

  readTextFile("resources/advisory.json", function (text) {
    var data = JSON.parse(text);
    for (const dt in data) {
      $("#deptAdvCom").append(`<li>${data[dt]?.name}</li>`);
    }
  });

  readTextFile("resources/international.json", function (text) {
    var data = JSON.parse(text);
    for (const dt in data) {
      $("#intlAdvCom").append(`<li>${data[dt]?.name}</li>`);
    }
  });

  readTextFile("resources/speaker.json", function (text) {
    var data = JSON.parse(text);

    for (const dt in data) {
      console.log(data[dt]);
      $("#speakerList").append(`<li class="d-flex flex-direction-column align-items-center justify-content-center">
      <img src=${data[dt].image} />
      <p>${data[dt].name}</p>
      <p>${data[dt].affliation}</p>
      </li>`);
    }
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
        loop: true,
        lazyLoad: true,
      },
      1000: {
        items: 3,
        nav: false,
        loop: true,
        lazyLoad: true,
      },
    },
  });
});
