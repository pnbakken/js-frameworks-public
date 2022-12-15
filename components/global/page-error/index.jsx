import PropTypes from "prop-types";

import styles from "./page-error.module.scss";

function PageError({ children }) {
  return <div className={styles.pageError}>{children}</div>;
}

export default PageError;

PageError.propTypes = {
  children: PropTypes.node.isRequired,
};
