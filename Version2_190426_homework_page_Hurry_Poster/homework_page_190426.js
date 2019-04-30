$(document).ready(function(evt) {
  // 移除上傳的圖片
  function removeImg() {
    console.log('!!');
      
  };
  removeImg(); // Call function for default images.


  // Insert imgs to the first
  $('#img-url').on('change', function(evt){
    console.log('a');
      $('.img-section').prepend(`<img class="img-fluid rounded" src="${$('#img-url').val()}" alt="Oops! Can't find the image.">`);
      $(this).val('');
      removeImg()
  });

  $('.img-section').click('.img-fluid', function(evt) {
    // $('.img-fluid').bind("click", function(evt) {
      console.log(evt.target);
      $(evt.target).fadeOut("slow")
      // alert(1);
      // $('#img-fluid').fadeOut("slow");
      // $(this).fadeOut();
      // $(this).hide("slow");
      // $(this).remove();
   });
    
  // $('.btn').click(function(evt) {
  //   console.log('b');
  //   console.log($('#img-url').val());
  //   let imgHref = $('#img-url').val();
  //   $('.img-section').prepend(`<img class="img-fluid rounded" src="${imgHref}" alt="Oops! Can't find the image.">`);
  //   $('#img-url').val('');
  //   removeImg()
  // });


  // 快速加入圖片
  $('li').click(function(evt) {
    $('.img-section').prepend(`<img class="img-fluid rounded" src="${$(this).text()}" alt="Oops! Can't find the image.">`);
    removeImg()
  });
  



  // Special effect of input text area.
  // 輸入時內容時，將說明文字往上移動
  // 清空內容時，恢復內容說明文字到原來位置
  $('#img-url').keyup(function(evt){
    let inputVal = $('#img-url').val();
    if (!!inputVal == true) {
      $('.img-headsup').addClass('move-away');
    } else {
      $('.img-headsup').removeClass('move-away');
    };
  });
})