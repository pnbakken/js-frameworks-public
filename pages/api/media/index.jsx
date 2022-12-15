import data from "./media.json";

export default async function handler(req, res) {
  const { type } = req.query;
  if (type) {
    const filteredData = data.filter((d) => d.media_type === type);
    if (filteredData.length > 0) {
      res.status(200).json(filteredData);
    } else {
      res.status(404).json(`No media found for type ${type}`);
    }
  } else {
    res.status(200).json(data);
  }
}
