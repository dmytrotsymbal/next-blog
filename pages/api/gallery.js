import { gallery } from "./data/gallery";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(gallery);
  }
}
