import Heading from "../../../global/typography/heading";
import PropTypes from "prop-types";
import LargeImage from "../../image-layout/next-image/large-image";
import styles from "./post-header.module.scss";

function PostHeader({ title, image }) {
  return (
    <div className={`${styles.postHeader} flex-column align-center`}>
      <Heading>{title}</Heading>
      {image && <LargeImage image={image} alt={title} />}
    </div>
  );
}

export default PostHeader;

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};
