import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

function Main({ children }) {
  return (
    <main>
      <Container expand="lg" className="flex-column mt-5">
        {children}
      </Container>
    </main>
  );
}

export default Main;

Main.propTypes = {
  children: PropTypes.node,
};
