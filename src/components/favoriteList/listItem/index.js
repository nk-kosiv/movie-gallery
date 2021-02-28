// Imports
import styles from "./styles.module.css";

const favoriteListItem = ({ name, id }) => {
  const listItemContent = `
    <ul class="${styles.favorite_list_item}">
      <li>
        <div class="${styles.favorite_list_item_block}">
        <span class="${styles.favorite_list_item_text}">${name}</span>
        <button 
          class="${styles.favorite_list_item_btn}" 
          id="${`item_${id}`}"
        >
          &#xd7;
        </button>
        </div>
      </li>
    </ul>
  `;

  const itemListElement = document.createElement("div");
  itemListElement.className = styles.listItemContainer;
  itemListElement.innerHTML = listItemContent;

  // Inserting el in gallery_block
  return itemListElement;
};
export default favoriteListItem;
