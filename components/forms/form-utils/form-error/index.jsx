import styles from "./form-error.module.scss";
import PropTypes from "prop-types";

const FormError = ({ children }) => {
  return <div className={styles.formError}>{children}</div>;
};

export default FormError;

FormError.propTypes = {
  children: PropTypes.node.isRequired,
};
