async function getMovie(id) {
  const movieReponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=e2c9f4dca9d4e03754e901bfc757e6a0`
  );

  const data = await movieReponse.json();
  return data;
}

function changeTitle(title) {
  const titleHeader = document.querySelector("#title");
  titleHeader.innerHTML = title;
}

function changeTitle(title) {
  const titleHeader = document.querySelector("#title");
  titleHeader.innerHTML = title;
}

function changeImg(imageSrc) {
  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
  const image = document.querySelector("#image");
  image.src = `${IMG_PATH}/${imageSrc}`;
}

function changeRate(rateText) {
  const rate = document.querySelector("#rate");
  rate.innerHTML = rateText;
}

function changeInfo(infoText) {
  const info = document.querySelector("#info");
  info.innerHTML = infoText;
}

async function main() {
  const id = localStorage.getItem("id");
  const data = await getMovie(id);
  changeTitle(data.original_title);
  changeImg(data.poster_path);
  changeRate(data.vote_average);
  changeInfo(data.overview);
}

main();
