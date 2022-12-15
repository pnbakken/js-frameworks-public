import Image from "next/image";
import PropTypes from "prop-types";

function LargeImage({ image, alt }) {
  return (
    <div className={`flex-row justify-center`}>
      <Image src={image} alt={alt} width={600} height={400} />
    </div>
  );
}

export default LargeImage;

LargeImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
