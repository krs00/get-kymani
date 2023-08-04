$(document).ready(function() {
  const kymaniBtn = $('#kymani-btn');
  const imagesArray = ['./img/kymani1.png', './img/kymani2.png', './img/kymani3.png', './img/kymani4.png'];

  function generateKymani() {

    const newKymani = $('<img>');


    const randomImageIndex = Math.floor(Math.random() * imagesArray.length);
    const randomImageSrc = imagesArray[randomImageIndex];


    newKymani.attr('src', randomImageSrc);
    newKymani.attr('draggable', 'true');
    newKymani.addClass('kymani');

  
    const viewportWidth = $(window).width() - 100; 
    const viewportHeight = $(window).height() - 100; 


    const randomLeft = Math.floor(Math.random() * viewportWidth);
    const randomTop = Math.floor(Math.random() * viewportHeight);

    newKymani.css({
      position: 'fixed',
      left: randomLeft + 'px',
      top: randomTop + 'px'
    });

    
    $('body').append(newKymani);

    
    newKymani.draggable({
      containment: 'window', 

      start: function(event, ui) {
        $(this).appendTo('body');
      },
    });
  }

  kymaniBtn.on('click', generateKymani);
});
