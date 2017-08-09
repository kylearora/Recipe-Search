let container = document.querySelector('.container')
let recipe = document.querySelector('.recipe')
let title = document.querySelector('.title')

let input = document.querySelector('#inputBox').addEventListener("keydown", function(event){
  if (event.keyCode === 13) {
    console.log(event.target.value);
    return(getData(event.target.value));
    }
  })

function getData(event){
  fetch(`http://recipepuppyproxy.herokuapp.com/api/?i=${event}`)
    .then(function(response){
      return response.json()
    }).then(function(data) {
      populateData(data)
    })
  }

getData("")

function populateData(data) {
  console.log(data);
  let content = ""
  for (var i = 0; i < data.results.length; i++) {
      console.log(data.results[i].title);

      let title = `${data.results[i].title}`
      let ingredients = `${data.results[i].ingredients}`
      let link = `${data.results[i].href}`
      let photo = `${data.results[i].thumbnail}`

      content += `
      <div class = "recipe">
        <a href ="${link}"><img class = "infoPhoto" src=${photo}></img></a>
        <a href ="${link}"><span class = "infoTitle"><h2>${title}</h2></span></a>
        <span class ="infoIngredients"><h2>Ingredients: ${ingredients}</h2></span>
        <span class ="infoLink"><a href ="${link}"></a></span>
      </div>
      `
  }
  container.innerHTML = content
}
