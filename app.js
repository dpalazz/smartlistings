
$(() => {
  // Global Variables
  const removeActiveClass = () => {
    console.log($('li').removeClass('active'));
    $(event.currentTarget).addClass('active');
  };

  const contactUsModal = () => {
    $('body').addClass('dim');
    const $modalContainer = $('<div>').addClass('modal-container').appendTo($('body'));
    const $modal = $('<div>').addClass('modal').appendTo($modalContainer);
    const $modalText = $('<h1>').addClass('modal-text').text('Contact us').appendTo($modal);
    const $close = $('<h5>').text('X').addClass('cursor').prependTo($modal);
    const closeModal = () => {
      $('body').removeClass('dim');
      $modalContainer.remove();
      $modal.remove();
      $modalText.remove();
      $close.remove();
    }
    $close.on('click', closeModal);
  };



  // Handlers
  $('.marketplace').on('click', removeActiveClass);
  $('.landlord').on('click', removeActiveClass);
  $('.btn').on('click', contactUsModal);

}); //ends
