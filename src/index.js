import * as data from './modules/data.js';
import * as scores from './modules/Score.js';
import './style.css';

data.createGameID();
scores.getScores();
document.querySelector('#scoresForm').addEventListener('submit', scores.addScore);

document.querySelector('#refreshBtn').addEventListener('click', scores.getScores);