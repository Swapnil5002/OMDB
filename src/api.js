
const PageoneAPI = 'http://www.omdbapi.com/?i=tt4853102&plot=full&apikey=3526ba39'
const PagetwoAPI = 'http://www.omdbapi.com/?s=x%20men&y=2000&apikey='

export const fetchPageOneData = () =>
  new Promise((resolve, reject) => {
    fetch(PageoneAPI)
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  });

export const fetchPageTwoData = () =>
  new Promise((resolve, reject) => {
    fetch(PagetwoAPI)
      .then(res => res.json())
      .then(resolve)
      .catch(reject);
  });