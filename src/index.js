
const btnDog = document.querySelector('.j-btn-dog');
const btnCat = document.querySelector('.j-btn-cat');
const btnParrot = document.querySelector('.j-btn-parrot');
const btnResult = document.querySelector('.j-btn-result');

const infoBlock = document.querySelector('.j-info');
const resultBlock = document.querySelector('.j-results');

const progressDogs = document.querySelector('.j-progress-dogs');
const progressCats = document.querySelector('.j-progress-cats');
const progressParrots = document.querySelector('.j-progress-parrots');

const urlDog = new URL('https://sf-pyw.mosyag.in/sse/vote/dogs');
const urlCat = new URL('https://sf-pyw.mosyag.in/sse/vote/cats');
const urlParrot = new URL('https://sf-pyw.mosyag.in/sse/vote/parrots');
const urlResults = new URL('https://sf-pyw.mosyag.in/sse/vote/stats');

const header = new Headers({
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "*"
});
const ES = new EventSource(urlResults, header);


const disableBtns = () => {
  btnDog.setAttribute('disabled', 'disabled');
  btnCat.setAttribute('disabled', 'disabled');
  btnParrot.setAttribute('disabled', 'disabled');
}
const showInfoBlock = () => {
  infoBlock.style.display = 'flex';
}

btnDog.onclick = () => {
  disableBtns();
  showInfoBlock();
  fetch(urlDog, {method: 'POST'})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("Some ERROR:", error);
  })
};
btnCat.onclick = () => {
  disableBtns();
  showInfoBlock();
  fetch(urlCat, {method: 'POST'})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("Some ERROR:", error);
  })
};
btnParrot.onclick = () => {
  disableBtns();
  showInfoBlock();
  fetch(urlParrot, {method: 'POST'})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log("Some ERROR:", error);
  })
};


btnResult.onclick = () => {
  btnResult.setAttribute('disabled', 'disabled');
  resultBlock.style.display = 'block';
}


ES.onerror = (error) => {
  ES.readyState ? progress.textContent = "Some error" : null;
};
ES.onmessage = (message) => {
  resultsObj = JSON.parse(message.data);
  progressDogs.style.width = `${resultsObj.dogs / 100}%`;
  progressDogs.textContent = `${resultsObj.dogs / 100}%`;
  progressCats.style.width = `${resultsObj.cats / 100}%`;
  progressCats.textContent = `${resultsObj.cats / 100}%`;
  progressParrots.style.width = `${resultsObj.parrots / 100}%`;
  progressParrots.textContent = `${resultsObj.parrots / 100}%`;
};
