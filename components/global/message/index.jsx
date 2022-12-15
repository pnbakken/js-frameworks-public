import PropTypes from "prop-types";

function Message({ type = "", children }) {
  return <div className={`message ${type}`}>{children}</div>;
}

export default Message;

Message.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};
