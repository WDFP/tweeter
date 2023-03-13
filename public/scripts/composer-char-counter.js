$(document).ready(function () {
  // --- our code goes here ---
  $("#tweet-text").keyup("click", function () {
    const maxLength = 140;
    const textLength = $(this).val().length;
    const charRemain = maxLength - textLength;
    const $newCounter = $(this).parent().find(".counter");
    $newCounter.text(charRemain);

    if (charRemain < 0) {
      $newCounter.addClass("counter-color");
    } else {
      $newCounter.removeClass("counter-color");
    }
  });
});
