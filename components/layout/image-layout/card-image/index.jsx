import styles from "./card-image.module.scss";
import PropTypes from "prop-types";

//I wanted to use next/image here, but I found it hard to use either the set width and height or layout="fill" options
function CardImage({ image, alt }) {
  return (
    <div className={styles.cardImage} role="img" aria-label={alt}>
      <div
        className={`${styles.image}`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default CardImage;

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
