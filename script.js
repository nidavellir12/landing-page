//Array of images which you want to show: Use path you want.
var images = new Array(
  "images/pic1.jpeg",
  "images/pic2.jpeg",
  "images/pic3.jpeg"
)
var nextimage = 0
// if (window.innerWidth > 460) {
doSlideshow()
// }

function doSlideshow() {
  if (nextimage >= images.length) {
    nextimage = 0
    // console.log(nextimage);
  }
  $(".mainContent")
    .css("background-image", 'url("' + images[nextimage++] + '")')
    .fadeIn(500, function () {
      setTimeout(doSlideshow, 5000)
    })
}
