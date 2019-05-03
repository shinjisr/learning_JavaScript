$(document).ready(function() {
  $('#number-selector').on('change', function(evt){
    let $sNum = $(this).val()
    console.log($sNum)
    getUser($sNum)
  });
  
  function getUser(num){
      fetch(`https://randomuser.me/api/?results=${num}`)
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
        let users = data.results;
        for(let user of users){
          let html = getUserHtml(user);
          $('.user-area .row').append(html);
        }
      })
        .catch(function(){
          console.log('some bad thing happend')
      });

      function getUserHtml(user) {
        return `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${user.picture.large}" />
          <div class="card-body">
            <h5 class="card-title">${user.name.first}</h5>
            <p class="card-text">${user.email}</p>
            <a href="#" class="btn btn-info">Dismiss</a>
          </div>
        </div>
      `
      };
    };
})