import { getMovieData } from "./utils/getMovieData";
import {
  getStoredFavoriteList,
  refreshLocalStorege,
} from "./utils/refreshLocalStorege";
import { renderMovieGallery } from "./components/movieGallery";
import renderFavoriteList from "./components/favoriteList";

const dialog = document.getElementById("dialog");
let movieList = [];

export const toggleListItems = (id) => {
  const newFavoriteList = refreshLocalStorege(id);
  renderFavoriteList(newFavoriteList, movieList);
};

async function initApp() {
  // Collecting data
  movieList = await getMovieData();
  const favoriteListFromSrorege = getStoredFavoriteList();

  // Rendering the UI
  renderFavoriteList(favoriteListFromSrorege, movieList);
  renderMovieGallery(movieList);

  // Attaching event listeners
  const closeButton = document.getElementById("close_dialog");
  const closeModal = () => (dialog.style.display = "none");
  closeButton.addEventListener("click", closeModal);
}

window.addEventListener("load", initApp);
