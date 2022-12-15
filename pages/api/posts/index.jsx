import postData from "./posts.json";
import mediaData from "../media/media.json";

export default async function handler(req, res) {
  let returnData = postData;
  const { author, embed } = req.query;

  if (author) {
    returnData = returnData.filter((rD) => rD.post_author === author);
    if (returnData.length <= 0) {
      res.status(404).json({ message: `No posts found for author ${author}` });
    }
  }

  if (embed) {
    res.status(200).json(await packageMediaData(returnData));
  } else {
    res.status(200).json(returnData);
  }
}

/**
 * packageMediaData()
 * Takes a JSON array of posts and finds media corresponding to associated_media_slug for each post.
 * Returned bundle is an array of {post, media} objects
 * @param postData: JSON[]
 * @returns {post, media}
 */
export async function packageMediaData(postData) {
  let packagedArray = [];
  postData.forEach((obj) => {
    const associatedMedia = mediaData.filter(
      (md) => md.slug === obj.associated_media_slug
    );
    if (associatedMedia) {
      packagedArray.push({ post: obj, media: associatedMedia[0] });
    } else {
      packagedArray.push({ post: obj, media: { message: "No media found" } });
    }
  });
  return packagedArray;
}
