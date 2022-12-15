import PageError from "../../components/global/page-error";
import GeneralLayout from "../../components/layout/general-layout";
import PostDetailLayout from "../../components/layout/post-detail-layout";
import { LOCAL_BASE_URL } from "../../constants/api";
import createAxios from "../../functions/create-axios";
import PropTypes from "prop-types";

function Post(props) {
  if (props.error) {
    return (
      <GeneralLayout title="Not Found">
        <PageError>
          {props.error.message ? props.error.message : "No data was found"}
        </PageError>
      </GeneralLayout>
    );
  }

  const { post, media } = props.post;

  return (
    <GeneralLayout title={post.title}>
      <PostDetailLayout post={post} media={media ? media : ""} />
    </GeneralLayout>
  );
}

export default Post;

Post.propTypes = {
  props: {
    post: {
      post: PropTypes.object,
      media: PropTypes.object,
    },
  },
};

// Can't get this to work on build
// export async function getStaticPaths() {
//   try {
//     const client = createAxios();
//     const response = await client.get(LOCAL_BASE_URL + "/api/posts");

//     if (response) {
//       const paths = response.data.map((post) => ({
//         params: { id: post.id.toString() },
//       }));
//       return { paths: paths, fallback: false };
//     }
//   } catch (err) {
//     console.error(err);
//     return null;
//   }
// }

export async function getServerSideProps(context) {
  if (context.params) {
    const url = LOCAL_BASE_URL + `/api/posts/${context.params.id}`;

    let post = null;

    try {
      const client = createAxios();
      const response = await client.get(url);
      if (response) {
        post = response.data[0];
      }
    } catch (err) {
      return {
        props: {
          error: { message: "No media found" },
        },
      };
    }

    return {
      props: {
        post: post,
      },
    };
  } else
    return {
      props: {
        error: {
          message: "No supplied params",
        },
      },
    };
}
