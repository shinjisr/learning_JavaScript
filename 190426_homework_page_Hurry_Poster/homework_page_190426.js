$(document).ready(function(evt) {
  // Insert imgs to the first
  $('#img-url').on('change', function(evt){
    let imgHref = $(this).val();
    console.log(imgHref);
    // 這一段 src value 無法正常 separate from alt
    $('.img-section').prepend(`<img class="img-fluid rounded" src="${imgHref}" alt="Oops! Can't find the image.">`);
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