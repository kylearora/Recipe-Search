let container = document.querySelector('.container')
let recipe = document.querySelector('.recipe')
let title = document.querySelector('.title')
let input = document.querySelector('#inputBox').addEventListener("keydown", function(event){
  if (event.keyCode === 13) {
    console.log(event.target.value);
    return(getData(event.target.value));

    for (var i = 0; i < data.results.length; i++) {

        title.innerHTML = `${data.results[0].title}`
    }
  }
})

function getData(event){
  fetch(`http://recipepuppyproxy.herokuapp.com/api/?i=${event}`)
    .then(function(response){
      return response.json()
    }).then(function(data) {
            console.log(data);
  })
}



// `<img src=${data[i].results[j].thumbnail}>`
