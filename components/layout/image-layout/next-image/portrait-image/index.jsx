import Image from "next/image";
import PropTypes from "prop-types";

function PortraitImage({ image, alt }) {
  return (
    <div className={``}>
      <Image src={image} alt={alt} width={250} height={300} />
    </div>
  );
}

export default PortraitImage;

PortraitImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
