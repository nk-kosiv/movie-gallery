import { toggleListItems } from "../../index";
import listItem from "./listItem";

const listBlock = document.getElementById("favorite_block");

export default function renderFavoriteList(newFavoriteList, movieList) {
  listBlock.innerHTML = "";

  newFavoriteList.forEach((id) => {
    const { name } = movieList.find((el) => el.id === id);
    const newItem = listItem({ id, name });
    listBlock.appendChild(newItem);
    document
      .getElementById(`item_${id}`)
      .addEventListener("click", () => toggleListItems(id));
  });
}
