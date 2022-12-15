import { NextApiRequest, NextApiResponse } from "next";
import data from "./media.json";

export default async function handler(req, res) {
  const { slug } = req.query;
  if (slug) {
    const foundItem = data.filter((d) => d.slug === slug);

    if (foundItem.length > 0) {
      res.status(200).json(foundItem);
    } else {
      res.status(404).send(`No data found for ${slug}`);
    }
  } else {
    res.status(404).send(`No slug provided`);
  }
}
