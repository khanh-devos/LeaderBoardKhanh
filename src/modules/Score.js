import * as data from './data.js';

export const getScores = async () => {
  const ul = document.querySelector('#scoresUl');
  ul.innerHTML = '';

  const scores = await data.getData();
  const listLi = scores.map((item) => `
    <li class='scoreLi'>${item.user} : ${item.score}</li>  
  `);

  ul.innerHTML = listLi.join('') ? listLi.join('') : 'no scores, please add one';
};

export const addScore = async (e) => {
  e.preventDefault();
  const newScore = {
    user: e.target.user.value,
    score: e.target.score.value,
  };

  data.setData(newScore);
  e.target.reset();
};
