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

const changeView = () => {
  const rowViewButton = document.getElementById("select_row_view");
  const gridViewButton = document.getElementById("select_grid_view");
  const gallery = document.getElementById("gallery_block");

  gridViewButton.addEventListener("click", () => {
    gallery.classList.add("gallery_grid_view");
  });
  rowViewButton.addEventListener("click", () => {
    gallery.classList.remove("gallery_grid_view");
  });
};

async function initApp() {
  // Collecting data
  movieList = await getMovieData();
  const favoriteListFromSrorege = getStoredFavoriteList();

  // Rendering the UI
  renderFavoriteList(favoriteListFromSrorege, movieList);
  renderMovieGallery(movieList, favoriteListFromSrorege);
  toggleSelectedItemMovieStyle(favoriteListFromSrorege, movieList);
  changeView();

  // Attaching event listeners
  const dialog = document.getElementById("dialog");
  const closeButton = document.getElementById("close_dialog");
  const closeModal = () => (dialog.style.display = "none");
  closeButton.addEventListener("click", closeModal);
}

window.addEventListener("load", initApp);
