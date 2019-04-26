$(document).ready(function() {

  $("#menuBtn").on("click", function(evt) {
    $(".menuList").toggle("slow");
    console.log(evt.target.id);
  });
  
  // 點擊的時候 加入星號在文字最後方
  $('.menuList li').on('click', function(evt) {



    // console.log(this) // 選取到的 li
    $('.menuList ul').append('<li>lalala</li>')
    // $(this).appendTo('.menuList ul')

    let d = $(this).data()
    console.log(d)
    let originalText = $(this).html();

    $(this).html(originalText + '*');

    // let myName = 'a variable';
    // $('.menuList').before(`<div>${myName}</div>`);
    
    // $('.menuList').wrap('<div class="bra"></div>')
    // $('.menuList').wrap('div.bra')


  })

  // $("li").on("click", function(evt) {
  //   let listArr = [...items] = $("li").text();
  //   console.log(items);
    
  //   for(let i in listArr){
  //     $(this).text(listArr[i]);
  //   };

  //   let a = $(this).text();
  //   $(this).html(a + "*");
  
  // });

  $(".menuList li").hover(function() {
    // $(this): 將 this 包裝成 jQuery 物件，才能有 .toggleClass function
    $(this).toggleClass("current");
    $(this).css('font-size: 40px;')
  });


  $('#name').on('change', function(evt){
    let t = $(this).val()
    $(this).val(t + "@gmail.com")
  })



});
