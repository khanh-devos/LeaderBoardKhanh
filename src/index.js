import * as scores from './modules/Score.js';
import './style.css';

scores.getScores();
document.querySelector('#scoresForm').addEventListener('submit', scores.addScore);
