import PropTypes from "prop-types";

export function isFavourite(favourites, id) {
  let found = false;
  if (Array.isArray(favourites) && favourites.length > 0) {
    favourites.forEach((fav) => {
      if (parseInt(fav.id) === parseInt(id)) {
        found = true;
      }
    });
  }
  return found;
}

isFavourite.propTypes = {
  id: PropTypes.number.isRequired,
};

export function addFavourite(favourites, favourite) {
  if (Array.isArray(favourites) && favourites.length > 0) {
    let newFavourites = favourites;
    if (!isFavourite(favourites, favourite.id)) {
      newFavourites.push(favourite);
      return newFavourites;
    } else return favourites;
  } else {
    const newFavourites = [favourite];
    return newFavourites;
  }
}

addFavourite.propTypes = {
  favourite: {
    title: PropTypes.string,
    id: PropTypes.number,
  },
};

export function removeFavourite(favourites, id) {
  if (isFavourite(favourites, id)) {
    const newFavourites = favourites.filter(
      (fav) => parseInt(fav.id) !== parseInt(id)
    );
    return newFavourites;
  } else return favourites;
}
