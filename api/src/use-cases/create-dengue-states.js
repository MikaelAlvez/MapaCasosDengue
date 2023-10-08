import { Dengue } from "../models/casos-dengue.js";
export async function create(req, res) {
  try {
    const body = req.body;
    const caseDengue = await Dengue.insertOne(body);
    return res.json(caseDengue);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
