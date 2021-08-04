
const movies = document.getElementById("movies")
const dir = document.getElementById("filmBy")
const time = document.getElementById('date')
const syn = document.getElementById('descriptions')

function displayMovieInfo(movieInfo) {

const moviesToDisplay = [0,1,2,8,10,12,14,17]
for (let index = 0; index < movieInfo.length; index++) {
	const element = movieInfo[index];	
	if (moviesToDisplay.includes(index)){
		console.log(element) 
	
const title = document.createElement("h2")
title.innerText = element.title
movies.appendChild(title)

const para = document.createElement('h4')
para.innerText = element.director
dir.appendChild(para)

const dat = document.createElement('p')
dat.innerText = element.release_date
time.appendChild(dat)

const des = document.createElement('span')
des.innerText = element.description
syn.appendChild(des)

	
	}
}
}

// TODO
	// 1 use a for loop - standard for loop OR for of if you like
	// 2 createElement method
	// 3 appendchild method




	
fetch("https://ghibliapi.herokuapp.com/films")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
	displayMovieInfo(data);
  });


	
	
// You can execute this function with a button! 	
// const fetchData = async () => {
//   await fetch("https://api.spacexdata.com/v3/capsules")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// };


// fetchData()