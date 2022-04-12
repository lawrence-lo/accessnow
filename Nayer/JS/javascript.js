console.log("hi");
var modal = document.getElementById("User_Modal");

// Get the button that opens the modal
var btn = document.getElementById("user_btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Distance button
$('.btn-toggle').click(function() {
  $(this).find('.btn').toggleClass('active');  
  
  if ($(this).find('.btn-primary').length>0) {
    $(this).find('.btn').toggleClass('btn-primary');
  }
  if ($(this).find('.btn-danger').length>0) {
    $(this).find('.btn').toggleClass('btn-danger');
  }
  if ($(this).find('.btn-success').length>0) {
    $(this).find('.btn').toggleClass('btn-success');
  }
  if ($(this).find('.btn-info').length>0) {
    $(this).find('.btn').toggleClass('btn-info');
  }
  
  $(this).find('.btn').toggleClass('btn-default');
     
});