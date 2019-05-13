$(document).ready(function() {
  // 圖片清除按鈕
  $('.clear-btn').click(function(evt){
    $('.card').fadeOut("slow");
    setTimeout(function() {
      $('.card').remove();
    }, 1500);
  });

  
  // ! 在讀取中顯示 loading spinner
  let $loading = $('#load-spinner');
  $loading.hide();
  // $(document)
  //   .ajaxStart(function () {
  //     $loading.show();
  //   })
  //   .ajaxStop(function () {
  //     $loading.hide();
  //   });
  // ! 
  $('#number-selector').on('change', function(evt){
    let $sNum = $(this).val();
    // * 在讀取中顯示 loading spinner
    $loading.show();
    $('.users-area .row').empty()
    appendUsers($sNum)
  });
  
  // * Emit AJAX 事件
  // * 把 USER 的 HTML 放到 users-area
  function appendUsers(number) {
    let url = `https://randomuser.me/api/?results=${number}`

    fetch(url) 
      .then(function(res) {
        return res.json()
      })
      .then(function(data) {
        // ? data.result is array of user
        // ? 產生所有 user 的一個字串
        setTimeout(function() {
          // * 取得資料前 隱藏 spinner
          $loading.hide();
          let html = getUsersHTML(data.results)
          $('.users-area .row').append(html);
        }, 500);
        // console.log(html)
      })
    
  }

  // * 處理 users 迴圈陣列，組出所有 USERS 並輸出字串
  function getUsersHTML(users) {
    let htmlAry = [];
    for (let user of users) {
      let html = getUserHTML(user);
      htmlAry.push(html);
    };
    return htmlAry.join('');
  };

  // * 組出一個 user 的 HTML 字串
  function getUserHTML(user) {
    return `
    <div class="col-4">
      <div class="card">
        <img class="card-img-top" src="${user.picture.large}" />
        <div class="card-body">
          <h5 class="card-title">${user.name.first}</h5>
          <p class="card-text">${user.email}</p>
          <a href="#" class="btn btn-danger clear-btn">Dismiss</a>
        </div>
      </div>
    </div>
  `
  };
})


