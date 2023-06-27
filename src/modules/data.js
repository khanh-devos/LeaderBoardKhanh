export const setData = (scores) => {
  localStorage.setItem('scores', JSON.stringify(scores));
};

export const getData = () => (JSON.parse(localStorage.getItem('scores')) || [
  {
    index: 1,
    name: 'k1',
    score: 5,
  },
  {
    index: 2,
    name: 'k2',
    score: 10,
  },
  {
    index: 3,
    name: 'k3',
    score: 5,
  },
]);
