import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import ListItem from "./list-item";
import styles from "./card-list.module.scss";

function CardList({ data }) {
  return (
    <Container expand="md" className="p-5 ">
      <div className={`${styles.customCardList} flex-row wrap justify-evenly`}>
        {createCardItems(data)}
      </div>
    </Container>
  );
}

export default CardList;

function createCardItems(data) {
  return data.map((card) => {
    return <ListItem item={card} key={card.post.id} />;
  });
}

CardList.propTypes = {
  data: PropTypes.array.isRequired,
};
