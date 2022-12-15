import { Button } from "react-bootstrap";
import FavouritesContext from "../../../context/favourites-context";
import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import {
  addFavourite,
  isFavourite,
  removeFavourite,
} from "../../../functions/favourites";

function FavouritesButton({ id, title }) {
  const [favourites, setFavourites] = useContext(FavouritesContext);

  const [buttonAction, setButtonAction] = useState("Favourite");

  useEffect(() => {
    if (isFavourite(favourites, id)) {
      setButtonAction("Unfavourite");
    } else {
      setButtonAction("Favourite");
    }
  }, [favourites]);

  function actionFavourite() {
    if (isFavourite(favourites, id)) {
      const newFavourites = removeFavourite(favourites, id);
      setFavourites(newFavourites);
    } else {
      const newFavourites = addFavourite(favourites, { id: id, title: title });
      setFavourites(newFavourites);
    }
  }
  return (
    <Button onClick={actionFavourite} variant="secondary">
      {buttonAction}
    </Button>
  );
}

export default FavouritesButton;

FavouritesButton.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
