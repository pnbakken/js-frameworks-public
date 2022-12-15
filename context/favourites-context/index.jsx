import useLocalStorage from "../../hooks/use-local-storage";
import PropTypes from "prop-types";
import React from "react";

const FavouritesContext = React.createContext([null, () => {}]);

export const FavouritesProvider = (props) => {
  const [favourites, setFavourites] = useLocalStorage("favourites", null);

  return (
    <FavouritesContext.Provider value={[favourites, setFavourites]}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;

FavouritesProvider.propTypes = {
  children: PropTypes.node,
};
