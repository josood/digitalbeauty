// jQuery element variables
var $slideNav;
// focus management variables
var $focusableInNav,
    $firstFocusableElement,
    $lastFocusableElement;

$(document).ready(function() {
    $slideNav = $(".horizontal-menu"),
    $focusableInNav = $('.horizontal-menu button, .horizontal-menu [href], .horizontal-menu input, .horizontal-menu select, .horizontal-menu textarea, .horizontal-menu [tabindex]:not([tabindex="-1"])');
  if ($focusableInNav.length) {
    $firstFocusableElement = $focusableInNav.first();
    $lastFocusableElement = $focusableInNav.last();
  }
});


function moveFocusToTop(e) {
  if (e.key === "Tab" && !e.shiftKey) {
      alert("111");
    e.preventDefault();
    
    $firstFocusableElement.focus();
  }
}

function moveFocusToBottom(e) {
  if (e.key === "Tab" && e.shiftKey) {
      alert("111");
    e.preventDefault();
    $lastFocusableElement.focus()
  }
}