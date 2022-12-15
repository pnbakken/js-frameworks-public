import styles from "./post-layout.module.scss";
import PostBody from "./post-body";
import PostHeader from "./post-header";
import PropTypes from "prop-types";
import FavouritesButton from "../../buttons/favourites-button";
import MediaFactBox from "../../global/media-factbox";
import { FavouritesProvider } from "../../../context/favourites-context";

function PostDetailLayout({ post, media }) {
  return (
    <div className={`${styles.postLayout} flex-column align-center`}>
      <PostHeader
        title={post.title}
        image={post.post_image ? post.post_image : ""}
      />
      <PostBody
        content={post.content}
        image={post.post_image ? "" : { image: media.image, alt: post.title }}
      />
      <FavouritesProvider>
        <FavouritesButton id={post.id} title={post.title} />
      </FavouritesProvider>
      <MediaFactBox media={media} />
    </div>
  );
}

export default PostDetailLayout;

PostDetailLayout.propTypes = {
  post: PropTypes.object.isRequired,
  media: PropTypes.object.isRequired,
};
