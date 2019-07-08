var loadTime = 3000;
var typeOpt = {
  strings: [
    `<p>hi I'm Akbar,</p>
<h1>a frontend developer and ui/ux designer who’s comfortable with the server-side.</div>
<div class="details">
<a href="mailto:ahmadi.akbar.1996@gmail.com"><i class="far fa-envelope what-second-div animated bounceInRight" style="animation-delay:0.5s;"></i></a>
<a href="https://github.com/ahmadi-akbar" target="_blank"><i class="fab fa-github what-second-div animated bounceInRight" style="animation-delay:0.7s;"></i></a>
<a href="https://instagram.com/ahmadi__akbar" target="_blank"><i class="fab fa-instagram what-second-div BounceInRight animated bounceInRight" style="animation-delay:0.9s;"></i></a>
<a href="https://t.me/ahmadi_akbar1" target="_blank"><i class="fab fa-telegram what-second-div BounceInRight animated bounceInRight" style="animation-delay:1.1s;"></i></a>
</div>`
  ],
  typeSpeed: 20,
  smartBackspace: true,
  backSpeed: 10,
  showCursor: true,
  startDelay: 4400,
  onComplete: () => {
    $(".typed-cursor").hide();
  }
};

var tabs = {
  1: "homeTab",
  2: "skillsTab",
  3: "worksTab",
  4: "contactTab"
};

function dots() {
  var int1 = setInterval(() => {
    var loading = $("#loadingText")[0];
    if (loading.innerHTML.length > 9) loading.innerHTML = "loading";
    else loading.innerHTML += ".";
  }, 300);
  setTimeout(() => {
    clearInterval(int1);
  }, loadTime);
}

$(document).ready(() => {
  dots();
  new Typed("#typePlace", typeOpt);
  $(".main").onepage_scroll({
    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease-in-out", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 700, // AnimationTime let you define how long each section takes to animate
    //pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    //beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
    beforeMove: index => {
      $("#homeTab, #skillsTab, #worksTab, #contactTab").removeClass('navTabActive');
      $("#" + tabs[index]).addClass('navTabActive');
    }, // This option accepts a callback function. The function will be called after the page moves.
    loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  });
  // go to first page
  moveTo(1);
});

function showDes() {
  $("#web").css("display", "none");
  $("#design").css("display", "flex");
  $("#web-btn").removeClass("secTabActive");
  $("#des-btn").addClass("secTabActive");
}
function showWeb() {
  $("#web").css("display", "flex");
  $("#design").css("display", "none");
  $("#web-btn").addClass("secTabActive");
  $("#des-btn").removeClass("secTabActive");
}

setTimeout(function() {
  $("#loading").addClass("animated fadeOut");
  $("#text").addClass("animated fadeOut");
  setTimeout(function() {
    $("#loading").removeClass("animated fadeOut");
    $("#text").removeClass("animated fadeOut");
    $("#text").css("display", "none");
    $("#loading").css("display", "none");
  }, 1000);
}, loadTime);

function moveTo(page){
  $(".main").moveTo(page);
}