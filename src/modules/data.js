export const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
export const game = {id: null};


export const setData = (scores) => {
  localStorage.setItem('scores', JSON.stringify(scores));
};

export const getData = () => {
}

export const createGameID = async () => {
  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'khanh_game'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  
  const {result } = await response.json();
  game.id = result.split(' ').splice(3,1)[0];
  console.log(game)
}
