// Imports
import styles from "./styles.module.css";

const favoriteListItem = ({ name, id }) => {
  const listItemContent = `
    <ul class="${styles.favorite_list_item}">
      <li>
        ${name}<button id="${`item_${id}`}">&#xd7;</button>
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
