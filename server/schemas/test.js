const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://rawg-video-games-database.p.rapidapi.com/games',
//   headers: {
//     'X-RapidAPI-Key': '68eb0690763d46b0b8c318062068f9bb',
//     'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com'
//   }
// };
const url= "https://rawg.io/api/games?search=zelda&key=246f9b92ca5c44d7bf1c561cf74089fc"
// async function callGame(){
try {
	const response = await axios.get(url);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
// }
// callGame();





