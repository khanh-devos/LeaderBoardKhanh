import okAdded from '../utils/okAdded.js';

export const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
export const game = { id: null };
const LENGTH = 5;

export const setData = (newScore) => {
  fetch(`${URL}/${game.id}/scores/`, {
    method: 'POST',
    body: JSON.stringify(newScore),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(async (res) => {
      const { result } = await res.json();
      if (result) okAdded();
    });
};

export const getData = async () => {
  if (!game.id) {
    return [];
  }
  const response = await fetch(`${URL}/${game.id}/scores/`);
  const { result } = await response.json();
  return result.slice(Math.max(0, result.length - LENGTH));
};

export const createGameID = () => {
  fetch(URL, {
    method: 'POST',
    body: JSON.stringify({
      name: 'khanh_game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(async (res) => {
      const { result } = await res.json();
      [game.id] = result.split(' ').splice(3, 1);
    });
};