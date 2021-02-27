import movieCard from "./components/movieCard";

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
const addListItem = (id) => {};

async function convertDataInUi() {
  const data = await asyncFetchData();
  return data.forEach(({ img, name, genres, year, description, id }) => {
    return movieCard({ img, name, genres, year, description });
  });
}

window.addEventListener("load", convertDataInUi);
