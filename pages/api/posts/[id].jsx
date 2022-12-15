
import { packageMediaData } from ".";
import postData from "./posts.json";

export default async function handler(req, res) {
  const {id} = req.query;

  if (id) {

    const foundPost = postData.filter(post => post.id === parseInt(id.toString()));
    
    if (foundPost.length > 0) {

      const createPackage = await packageMediaData(foundPost);
      res.status(200).json(createPackage);

    } else {
      res.status(404).end("None found");
    }
  } 
}