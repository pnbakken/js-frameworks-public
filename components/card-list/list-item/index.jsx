import Link from "next/link";
import PropTypes from "prop-types";
import Heading from "../../global/typography/heading";
import CardImage from "../../layout/image-layout/card-image";
import styles from "./list-item.module.scss";

function ListItem({ item }) {
  const { post, media } = item;
  const image = post.post_image ? post.post_image : media.image;

  return (
    <>
      <Link href={`/detail/${post.id}`}>
        <a
          className={`${styles.listItem} flex-column justify-stretch justify-center`}
        >
          <div
            className={`p-3 mb-5 ${styles.customCard} flex-column justify-between pb-2`}
          >
            <div className={`${styles.cardTitle}`}>
              <Heading size={4}>{post.title}</Heading>
            </div>

            <div className={`${styles.cardBody} flex-column justify-between`}>
              <CardImage image={image} alt={post.title} />

              <span className="author">{post.post_author}</span>
            </div>
          </div>
        </a>
      </Link>
    </>
  );
}

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object,
};
