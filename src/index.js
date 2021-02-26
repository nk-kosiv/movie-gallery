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

asyncFetchData();
