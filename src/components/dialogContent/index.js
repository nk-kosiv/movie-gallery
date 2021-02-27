// Imports
import styles from "./styles.module.css";

const dialogContentElement = document.getElementById("dialog_content");

const filledStar = "&#9733;";
const emptyStar = "&#9734;";

const DialogContent = ({
  img,
  name,
  genres,
  year,
  description,
  director,
  starring,
  id,
  toggleListItems,
}) => {
  const genresContent = genres.map(
    (el) => `
    <div class="${styles.dialog_genres}">
      <span>${el}</span>
    </div>
  `
  );
  const starringContent = starring.map(
    (el) => `
    <div class="${styles.dialog_starring}">
      <span>${el}</span>
    </div>
  `
  );

  const dialogContent = `
    <div class="${styles.dialog_container}">
      <div id="${`dialog_image_${id}`}" class="${styles.dialog_image}">
        <img src="${img}" alt="${name}" />
      </div>
      <button id="${`dialog_content_btn_${id}`}" class="${
    styles.dialog_favorite_btn
  }">
        <span>${emptyStar}</span>
      </button>
      <div class="${styles.dialog_right}">
        <div class="${styles.dialog_name_block}">
          <span>${name}</span>
          <span>Year: ${year}</span>
        </div>
        <div class="${styles.dialog_description}">
          <p>${description}</p>
        </div>
        <div class="${styles.dialog_genres_container}">
          ${genresContent.join("")}
        </div>
        <div>
          ${starringContent.join("")}
        </div>
        <div>
         <span> ${director}</span>
        </div>
      </div>
    </div>
  `;

  const movieDialogElement = document.createElement("div");
  movieDialogElement.className = styles.main_dialog;
  movieDialogElement.innerHTML = dialogContent;

  // Inserting el in gallery_block
  dialogContentElement.innerHTML = "";
  dialogContentElement.appendChild(movieDialogElement);
  document
    .getElementById(`dialog_content_btn_${id}`)
    .addEventListener("click", () => toggleListItems(id));
};

export default DialogContent;
