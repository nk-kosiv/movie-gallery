import movieCard from "./movieCard";
import dialogContent from "../dialogContent";
import { toggleListItems } from "../../index";

const dialog = document.getElementById("dialog");

const handleOpenModal = (movieList) => (id) => {
  const movie = movieList.find((el) => el.id === id);

  dialogContent({
    ...movie,
    toggleListItems,
  });
  dialog.style.display = "flex";
};

export const renderMovieGallery = (data) => {
  const openModal = handleOpenModal(data);

  data.forEach((movie) =>
    movieCard({
      ...movie,
      toggleListItems,
      openModal,
    })
  );
};
