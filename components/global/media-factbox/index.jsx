import Heading from "../typography/heading";
import PortraitImage from "../../layout/image-layout/next-image/portrait-image";
import PropTypes from "prop-types";

function MediaFactBox({ media }) {
  return (
    <div className="flex-column">
      <Heading size={4}>{media.name}</Heading>
      {media.year_released && (
        <span className="fact">{media.year_released}</span>
      )}
      {media.image && <PortraitImage image={media.image} alt={media.name} />}
      {media.creator && <span className="fact">{media.creator}</span>}
    </div>
  );
}

export default MediaFactBox;

MediaFactBox.propTypes = {
  media: PropTypes.object.isRequired,
};
