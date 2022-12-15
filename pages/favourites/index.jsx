import FavouritesList from "../../components/favourites-list";
import Heading from "../../components/global/typography/heading";
import GeneralLayout from "../../components/layout/general-layout";
import { FavouritesProvider } from "../../context/favourites-context";

function FavouritesPage() {
  return (
    <GeneralLayout title="Favourites">
      <Heading>Favourites</Heading>
      <FavouritesProvider>
        <FavouritesList />
      </FavouritesProvider>
    </GeneralLayout>
  );
}

export default FavouritesPage;
