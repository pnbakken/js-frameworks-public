import PropTypes from "prop-types";
import Heading from "../../../global/typography/heading";

function PostBody({ content }) {
  return (
    <div className={`flex-column align-between`}>
      {content.subheading && <Heading size={3}>{content.subheading}</Heading>}
      <div className="flex-row justify-center">
        <p>{content.content}</p>
      </div>
    </div>
  );
}

export default PostBody;

PostBody.propTypes = {
  content: PropTypes.node,
};
