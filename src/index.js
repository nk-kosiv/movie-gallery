import { getMovieData } from "./utils/getMovieData";
import {
  getStoredFavoriteList,
  refreshLocalStorege,
} from "./utils/refreshLocalStorege";
import { renderMovieGallery } from "./components/movieGallery";
import { toggleSelectedItemMovieStyle } from "./components/favoriteList";
import renderFavoriteList from "./components/favoriteList";

let movieList = [];

export const toggleListItems = (id) => {
  const newFavoriteList = refreshLocalStorege(id);
  renderFavoriteList(newFavoriteList, movieList);
  toggleSelectedItemMovieStyle(newFavoriteList, movieList);
};

async function initApp() {
  // Collecting data
  movieList = await getMovieData();
  const favoriteListFromSrorege = getStoredFavoriteList();

  // Rendering the UI
  renderFavoriteList(favoriteListFromSrorege, movieList);
  renderMovieGallery(movieList, favoriteListFromSrorege);
  toggleSelectedItemMovieStyle(favoriteListFromSrorege, movieList);

  // Attaching event listeners
  const dialog = document.getElementById("dialog");
  const closeButton = document.getElementById("close_dialog");
  const closeModal = () => (dialog.style.display = "none");
  closeButton.addEventListener("click", closeModal);
}

window.addEventListener("load", initApp);
