// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


// Smooth scroll with scrollspy
$(document).ready(function() {
$(".nav-link,.dropdown-item").click(function() {
    var t = $(this).attr('href');
    $('.active').not('.carousel-item.active').removeClass('active');
    $("html, body").animate({
        scrollTop: $(t).offset().top - 50
    }, {
        duration: 1e3,
    });

    $('body').scrollspy({ target: '#navbar-example',offset: $(t).offset().top });
    $(this).parent().addClass('active');

    return false;
});

});
