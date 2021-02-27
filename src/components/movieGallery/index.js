import movieCard from "./movieCard";
import dialogContent from "../dialogContent";
import { toggleListItems } from "../../index";

const dialog = document.getElementById("dialog");

const handleOpenModal = (movieList) => (id) => {
  const {
    img,
    name,
    genres,
    year,
    description,
    director,
    starring,
  } = movieList.find((el) => el.id === id);

  dialogContent({
    img,
    name,
    genres,
    year,
    description,
    director,
    starring,
    id,
    toggleListItems,
  });
  dialog.style.display = "flex";
};

export const renderMovieGallery = (data) => {
  const openModal = handleOpenModal(data);

  data.forEach(({ img, name, genres, year, description, id }) =>
    movieCard({
      img,
      name,
      genres,
      year,
      description,
      id,
      toggleListItems,
      openModal,
    })
  );
};
