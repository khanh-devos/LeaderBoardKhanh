import * as data from './data.js';

export function getScores() {
  const ul = document.querySelector('#scoresUl');
  ul.innerHTML = '';

  const listLi = data.getData().map((item) => `
    <li class='scoreLi'>${item.name} : ${item.score}</li>  
  `);

  ul.innerHTML = listLi.join('');
}

export function addScore(e) {
  e.preventDefault();
  const scores = data.getData();
  const newScore = {
    index: scores.length + 1,
    name: e.target.name.value,
    score: e.target.score.value,
  };

  scores.push(newScore);
  data.setData(scores);
  getScores();
  e.target.reset();
}
