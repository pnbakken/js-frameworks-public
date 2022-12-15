import Head from "next/head";
import PropTypes from "prop-types";

function PageHead({ title }) {
  return (
    <Head>
      <title>
        {title}
        {title ? " | " : ""} JS Frameworks CA
      </title>
    </Head>
  );
}

export default PageHead;

PageHead.propTypes = {
  title: PropTypes.string,
};
