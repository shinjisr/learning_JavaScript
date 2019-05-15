$(document).ready(function() {
  function getResources() {
    let url = "https://data.taipei/opendata/datalist/apiAccess?scope=resourceMetadataSearch&q=%E8%87%BA%E5%8C%97%E5%B8%82%E6%94%BF%E5%BA%9C%E8%AD%A6%E5%AF%9F%E5%B1%80%E5%88%91%E4%BA%8B%E8%AD%A6%E5%AF%9F%E5%A4%A7%E9%9A%8A%20%E8%87%BA%E5%8C%97%E5%B8%82%E4%BD%8F%E5%AE%85%E7%AB%8A%E7%9B%9C%E9%BB%9E%E4%BD%8D%E8%B3%87%E8%A8%8A"
		// console.log("TCL: getResources -> url", url)
    
    fetch(url)
    .then(function(res){
			// console.log("TCL: getResources -> res.json", res.json())
      return res.json()
    })
    .then(function(data){
			// console.log("TCL: data -> data", data.result)
      return data.result
    })
    .then(function(result) {
      // console.log("TCL: getResources -> result.results", result.results)
      console.log(result.results)
      return result.results
    })
    .then(function(results) {
      return results.resources
    })
    .catch(function(){
      console.log('something bad happened')
    })
  };

  $('h1').click(function(){
    getResources()
  });

})