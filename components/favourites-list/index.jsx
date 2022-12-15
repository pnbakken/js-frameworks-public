import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import FavouritesContext from "../../context/favourites-context";
import FavouritesButton from "../buttons/favourites-button";
import PageError from "../global/page-error";

function FavouritesList() {
  const [favourites, setFavourites] = useContext(FavouritesContext);
  const [favouritesPage, setFavouritesPage] = useState(null);

  useEffect(() => {
    if (favourites.length > 0) {
      setFavouritesPage(showFavourites(favourites));
    } else {
      setFavouritesPage(noFavourites());
    }
  }, [favourites]);

  return <Container expand="md">{favouritesPage}</Container>;
}

function showFavourites(favouritesList) {
  if (favouritesList) {
    return (
      <ul className="flex-column gap-md">
        {favouritesList.map((fav) => {
          return (
            <li
              className="justify-stretch collapse-mobile flex-row justify-between"
              key={fav.id}
            >
              <Link href={`/detail/${fav.id}`}>
                <a>{fav.title}</a>
              </Link>
              <FavouritesButton id={fav.id} title={fav.title} />
            </li>
          );
        })}
      </ul>
    );
  }
}

function noFavourites() {
  return <PageError>No favourites found</PageError>;
}

export default FavouritesList;
