import PageHead from "../../global/page-head";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import PropTypes from "prop-types";

function GeneralLayout({ children, title = "" }) {
  return (
    <>
      <PageHead title={title} />

      <Header />

      <Main>{children}</Main>

      <Footer />
    </>
  );
}

export default GeneralLayout;

GeneralLayout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
