const title1 = $(".title");



const item1 = $(".faq-item_cotent");

title1.click(function() {

  const this_title = $(this);
  const this_content = $(this).parent().find(item1);

 this_content.slideToggle();

 item1.not(this_content).slideUp();

//   item1.slideToggle();
  

});

