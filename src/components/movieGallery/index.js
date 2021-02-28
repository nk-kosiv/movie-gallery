import movieCard from "./movieCard";
import dialogContent from "../dialogContent";
import { toggleListItems } from "../../index";
import { toggleSelectedItemMovieStyle } from "../favoriteList";

const dialog = document.getElementById("dialog");

const handleOpenModal = (movieList, favoriteListFromSrorege) => (id) => {
  const movie = movieList.find((el) => el.id === id);

  dialogContent({
    ...movie,
    toggleListItems,
  });
  toggleSelectedItemMovieStyle(favoriteListFromSrorege, movieList);
  dialog.style.display = "flex";
};

export const renderMovieGallery = (data, favoriteListFromSrorege) => {
  const openModal = handleOpenModal(data, favoriteListFromSrorege);

  data.forEach((movie) =>
    movieCard({
      ...movie,
      toggleListItems,
      openModal,
    })
  );
};
