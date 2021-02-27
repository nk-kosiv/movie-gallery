import movieCard from "./components/movieCard";
import listItem from "./components/listItem";

async function asyncFetchData() {
  try {
    const requestBody = `https://my-json-server.typicode.com/moviedb-tech/movies/list/`;
    const getData = await fetch(requestBody);
    if (getData.ok) {
      const result = await getData.json();
      console.log(result);
      return result;
    }
    console.log(getData);
  } catch (e) {
    console.error(e);
  }
}

const listBlock = document.getElementById("favorite_block");

let movieList = [];

const favoriteList = new Set();

const toggleListItems = (id) => {
  listBlock.innerHTML = "";

  if (favoriteList.has(id)) {
    favoriteList.delete(id);
  } else {
    favoriteList.add(id);
  }

  const newFavoriteList = Array.from(favoriteList);

  newFavoriteList.forEach((id) => {
    const { name } = movieList.find((el) => el.id === id);
    const newItem = listItem({ id, name });
    listBlock.appendChild(newItem);
    document
      .getElementById(`item_${id}`)
      .addEventListener("click", () => toggleListItems(id));
  });
};

async function convertDataInUi() {
  const data = await asyncFetchData();

  movieList = data;

  data.forEach(({ img, name, genres, year, description, id }) =>
    movieCard({
      img,
      name,
      genres,
      year,
      description,
      id,
      toggleListItems,
    })
  );
}

window.addEventListener("load", convertDataInUi);
