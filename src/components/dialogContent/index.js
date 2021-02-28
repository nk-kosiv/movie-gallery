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
  const starringContent = starring.map((el) => `<span>${el}, </span>`);

  const dialogContent = `
      <div class="${styles.dialog_left}">
        <div id="${`dialog_image_${id}`}" class="${styles.dialog_image}">
          <img src="${img}" alt="${name}" />
        </div>
        <div class="${styles.dialog_year_and_btn}">
          <button 
            id="${`dialog_content_btn_${id}`}" 
            class="${styles.dialog_favorite_btn}"
          >
            <span>${emptyStar}</span>
          </button>
          <span>Year: ${year}</span>
        </div>
        <div class="${styles.dialog_genres_container}">
          ${genresContent.join("")}
        </div>
      </div>
      <div class="${styles.dialog_right}">
        <div class="${styles.dialog_right_top}">
          <div class="${styles.dialog_name_block}">
            <h3>${name}</h3>          
          </div>
          <div class="${styles.dialog_description}">
            <p>${description}</p>
          </div>  
        </div>
        <div class="${styles.dialog_right_bottom}">
          <div>
            <span>Director: ${director}</span>
          </div> 
          <div class="${styles.dialog_starring}">
            Starring: ${starringContent.join("")}
          </div> 
        </div>       
      </div>    
  `;

  const movieDialogElement = document.createElement("div");
  movieDialogElement.className = "dialog_content_containre";
  movieDialogElement.innerHTML = dialogContent;

  // Inserting el in gallery_block
  dialogContentElement.innerHTML = "";
  dialogContentElement.appendChild(movieDialogElement);
  document
    .getElementById(`dialog_content_btn_${id}`)
    .addEventListener("click", () => toggleListItems(id));
};

export default DialogContent;
