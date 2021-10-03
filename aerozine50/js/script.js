// ============================================================================================================================================================== */
// jQuery check if document is ready
//  ============================================================================================================================================================== */

jQuery(document).ready(function () {
  console.log("ready!");

  // ============================================================================================================================================================== */
  // Music Player album switch
  //  ============================================================================================================================================================== */

  // const audioPlayBtn = document.getElementsByClassName("ai-audio-control");

  // console.log(audioPlayBtn);

  // const artistOne = document.getElementById("artistOne");
  // const artistTwo = document.getElementById("artistTwo");
  // const artistThree = document.getElementById("artistThree");

  // const playerOne = document.getElementById("playerOne");
  // const playerTwo = document.getElementById("playerTwo");
  // const playerThree = document.getElementById("playerThree");

  // console.log(artistOne);

  // artistOne.addEventListener("click", function () {
  //   console.log("click");
  //   if (playerOne.classList.contains("hidden-block") == true) {
  //     playerOne.style.display = "block";
  //     playerOne.classList.remove("hidden-block");
  //   } else {
  //     playerOne.style.display = "none";
  //     playerOne.classList.add("hidden-block");
  //   }
  // });

  // artistTwo.addEventListener("click", function () {
  //   console.log("click");
  //   if (playerTwo.classList.contains("hidden-block") == true) {
  //     playerTwo.style.display = "block";
  //     playerTwo.classList.remove("hidden-block");
  //   } else {
  //     playerTwo.style.display = "none";
  //     playerTwo.classList.add("hidden-block");
  //   }
  // });

  // artistThree.addEventListener("click", function () {
  //   console.log("click");
  //   if (playerThree.classList.contains("hidden-block") == true) {
  //     playerThree.style.display = "block";
  //     playerThree.classList.remove("hidden-block");
  //   } else {
  //     playerThree.style.display = "none";
  //     playerThree.classList.add("hidden-block");
  //   }
  // });

  // ============================================================================================================================================================== */
  // Music Player Test 2
  //  ============================================================================================================================================================== */

  const artistPlaceholder = jQuery("#artistPlaceholder");
  const imgPlaceholder = jQuery("#imgPlaceholder");
  var test = jQuery(".ai-track-subtitle").text();

  // console.log(test);

  // if (test == "") {
  //   while (test == "") {
  //     var test = jQuery(".ai-track-subtitle").text();
  //     console.log(test);
  //     jQuery(artistPlaceholder).text(test);

  //     if (test !== "") {
  //       break;
  //     }
  //   }

  var timer = setInterval(updateTrack, 500);

  function updateTrack() {
    var test = jQuery(".ai-track-subtitle").text();
    console.log(test);
    jQuery(artistPlaceholder).text(test);
  }

  // setInterval(function () {
  //   var test = jQuery(".ai-track-subtitle").text();
  //   console.log(test);
  //   jQuery(artistPlaceholder).text(test);
  // }, 500);
  // }

  // if (test !== undefined) {
  // }
});
