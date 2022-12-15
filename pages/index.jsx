import GeneralLayout from "../components/layout/general-layout";
import createAxios from "../functions/create-axios";
import { LOCAL_BASE_URL } from "../constants/api";

import CardList from "../components/card-list";
import PageError from "../components/global/page-error";
import Heading from "../components/global/typography/heading";

function Home(props) {
  return (
    <GeneralLayout>
      <Heading>Home</Heading>
      {props.data ? (
        <CardList data={props.data} />
      ) : (
        <PageError>Something went wrong</PageError>
      )}
    </GeneralLayout>
  );
}

export async function getServerSideProps() {
  let data = null;
  const postsUrl = LOCAL_BASE_URL + "/api/posts?embed=true";

  try {
    const client = createAxios();
    const response = await client.get(postsUrl);

    if (response) {
      data = response.data;
    }
  } catch (err) {
    console.error(err);
  }

  return {
    props: {
      data: data,
    },
  };
}

export default Home;
