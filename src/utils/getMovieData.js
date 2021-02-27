export async function getMovieData() {
  try {
    const requestBody = `https://my-json-server.typicode.com/moviedb-tech/movies/list/`;
    const getData = await fetch(requestBody);
    if (getData.ok) {
      const result = await getData.json();
      return result;
    }
  } catch (e) {
    console.error(e);
  }
}
