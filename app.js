
$(() => {
  const removeActiveClass = () => {
    console.log($('li').removeClass('active'));
    $(event.currentTarget).addClass('active');

  };

  $('.marketplace').on('click', removeActiveClass);
  $('.landlord').on('click', removeActiveClass);

}); //ends
