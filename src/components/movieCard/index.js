// Imports
import styles from "./styles.module.css";

// Dom elements
const gelleryBlock = document.getElementById("gallery_block");

const filledStar = "&#9733;";
const emptyStar = "&#9734;";

const movieCard = ({ img, name, genres, year, description }) => {
  const genresContent = genres.map(
    (el) => `
    <div class="${styles.movie_card_genres}">
      <span>${el}</span>
    </div>
  `
  );

  const cardContent = `
    <div class="${styles.movie_card_container}">
      <div class="${styles.movie_card_image}">
        <img src="${img}" alt="${name}" />
      </div>
      <button class="${styles.movie_card_favorite_btn}">
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

  const divElement = document.createElement("div");
  divElement.className = styles.main_card;
  divElement.innerHTML = cardContent;
  // Inserting el in gallery_block
  return gelleryBlock.appendChild(divElement);
};
export default movieCard;