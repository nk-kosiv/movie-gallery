// Imports
import styles from "./styles.module.css";

// Dom elements
const galleryBlock = document.getElementById("gallery_block");

const filledStar = "&#9733;";
const emptyStar = "&#9734;";

const movieCard = ({
  img,
  name,
  genres,
  year,
  description,
  id,
  toggleListItems,
  openModal,
}) => {
  const genresContent = genres.map(
    (el) => `
    <div class="${styles.movie_card_genres}">
      <span>${el}</span>
    </div>
  `
  );

  const cardContent = `
    <div class="${styles.movie_card_container}">
      <div id="${`card_image_${id}`}" class="${styles.movie_card_image}">
        <img src="${img}" alt="${name}" />
      </div>
      <button id="${`card_content_btn_${id}`}" class="${
    styles.movie_card_favorite_btn
  }">
        <span>${emptyStar}</span>
      </button>
      <div class="${styles.movie_card_right}">
        <div class="${styles.movie_card_name_block}">
          <span>${name}</span>
          <span>Year: ${year}</span>
        </div>
        <div class="${styles.movie_card_description}">
          <p>${description}</p>
        </div>
        <div class="${styles.movie_card_genres_container}">
          ${genresContent.join("")}
        </div>
      </div>
    </div>
  `;

  const movieCardElement = document.createElement("div");
  movieCardElement.className = styles.main_card;
  movieCardElement.innerHTML = cardContent;

  // Inserting el in gallery_block
  galleryBlock.appendChild(movieCardElement);
  document
    .getElementById(`card_content_btn_${id}`)
    .addEventListener("click", () => toggleListItems(id));
  document
    .getElementById(`card_image_${id}`)
    .addEventListener("click", () => openModal(id));
};

export default movieCard;
