;
(function ($) {
  $(document).ready(function () {

    $("#gallery img").on("click", function (e) {
      var imgSrc = $(this).attr('src');
        var modalImage = $('<img>');
         modalImage.attr('src', imgSrc);

      modalImage.appendTo('.modal-content');
      openModal();
    });

    var openModal = function(){
      $(".modal").css("display", "block");
    };

    var closeModal = function(){
      $(".modal").css("display", "none").find('img').remove();
    };

    var imm = $(".modal-content img");

    $(".modal-close").on("click", closeModal);

    $(".modal").on("click", function(e){
      if($(e.target).is(".modal")){
        closeModal();
      }
    });

  })
})(jQuery)