import PropTypes from "prop-types";

function Heading({ size = 1, children }) {
  const HSize = `h${size}`;
  return <HSize className="mb-3">{children}</HSize>;
}

export default Heading;

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
};
