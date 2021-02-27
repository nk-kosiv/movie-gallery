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

const removeListItems = () => {};
const addListItems = ({ id, name }) => {
  const newItem = listItem({ id, name });
  listBlock.appendChild(newItem);
};

async function convertDataInUi() {
  const data = await asyncFetchData();

  data.forEach(({ img, name, genres, year, description, id }) =>
    movieCard({
      img,
      name,
      genres,
      year,
      description,
      id,
      addListItems,
    })
  );
}

window.addEventListener("load", convertDataInUi);
