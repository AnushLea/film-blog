$(document).ready(function () {
  $('.image-container').hover(
      function () {
      },
      function () {
      }
  );
});
$(document).ready(function () {
  $('.fake-img').hover(
      function () {
      },
      function () {
      }
  );
});

function submitForm() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var description = document.getElementById("description").value;

 
  alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message + "\nDescription: " + description);
}
