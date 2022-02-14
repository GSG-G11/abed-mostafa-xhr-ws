const inputSearch = document.querySelector('.search-query');

const inputBtn = document.querySelector('.search-btn');

const resultsContainer = document.querySelector('.search-results');

//Add your GIPHY API key here
const apiKey = '';

inputBtn.addEventListener('click', searchGifs);

function searchGifs() {
  const xhrRequest = new XMLHttpRequest();
  console.log(inputSearch.value);

  xhrRequest.onreadystatechange = function () {
    if (xhrRequest.readyState === 4 && xhrRequest.status === 200) {
      const results = JSON.parse(xhrRequest.responseText);
      results.data.forEach(element => {
        const gif = document.createElement('img');
        gif.src = element.images.original.url;
        resultsContainer.appendChild(gif);
      });
    }
  };

  xhrRequest.open(
    'GET',
    `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputSearch.value}&limit=25&offset=0&rating=g&lang=en`
  );
  xhrRequest.send();
}

searchGifs();
