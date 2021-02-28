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

export function toggleFavoriteListItem(element, id) {
  document
    .getElementById(element)
    .addEventListener("click", () => toggleListItems(id));
}

export const toggleSelectedItemMovieStyle = (
  favoriteListFromSrorege,
  movieList
) => {
  // Adding "filledStar" class to all chosen items
  const favoriteListArray = Array.from(favoriteListFromSrorege);
  favoriteListArray.forEach((id) =>
    [...document.querySelectorAll(`.toggle_star_${id}`)].forEach((el) => {
      el.classList.add("filledStar");
    })
  );

  // Removing "filledStar" class from all NOT chosen items
  const letOverIds = movieList
    .filter((item) => !favoriteListArray.includes(item.id))
    .map((el) => el.id);
  letOverIds.forEach((id) =>
    [...document.querySelectorAll(`.toggle_star_${id}`)].forEach((el) => {
      el.classList.remove("filledStar");
    })
  );
};
