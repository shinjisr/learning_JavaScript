fetch('https://randomuser.me/api/?results=4')
  .then(function (res) {
    // console.log(res);
    return res.json();
  })
  .then(function (data) {
    // console.log(data);
    // 取出 results object
  let users = data.results;
  for(let user of users){
    let html = getUserHtml(user);
    // console.log(user.email);
    document.write(html);
  }
})
  .catch(function(){
    console.log('some bad thing happend')
});

function getUserHtml(user) {
  return `
  <div>
    <img src="${user.picture.medium}" />
    <br />
    <div>Name</div>
    <div>${user.name.first}</div>
    <br />
    <div>Email</div>
    <div>${user.email}</div>
  </div>
`
}
