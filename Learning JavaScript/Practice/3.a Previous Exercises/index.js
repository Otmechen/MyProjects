$(document).ready(function() {
  const $startSound = $("#startSound");
  const $playStartSoundButton = $("#playStartSoundButton");
  
  $playStartSoundButton.on("click", function() {
    $startSound[0].play();
  });
  
  // Select the two buttons you created and add event listeners to play the success and fail sound respectively
  const $failSound = $("#failSound");
  const $playFailSoundButton = $("#playFailSoundButton");
  
  $playFailSoundButton.on("click", function() {
    $failSound[0].play();
  });

  const $successSound = $("#successSound");
  const $playSuccessSoundButton = $("#playSuccessSoundButton");
  
  $playSuccessSoundButton.on("click", function() {
    $successSound[0].play();
  });
});