let favoriteListState = new Set();

export const refreshLocalStorege = (id) => {
  if (favoriteListState.has(id)) {
    favoriteListState.delete(id);
  } else {
    favoriteListState.add(id);
  }

  const newFavoriteList = Array.from(favoriteListState);
  const favoriteListStringify = JSON.stringify(newFavoriteList);
  localStorage.setItem("favoriteList", favoriteListStringify);

  return newFavoriteList;
};

export const getStoredFavoriteList = () => {
  if (localStorage.getItem("favoriteList") !== null) {
    const favoriteListArray = JSON.parse(localStorage.getItem("favoriteList"));
    favoriteListState = new Set(favoriteListArray);
  }

  return favoriteListState;
};
