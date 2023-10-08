import { Dengue } from "../models/casos-dengue.js";
export async function getAllCasesDengue(req, res) {
  try {
    const casesDengue = await Dengue.find().toArray();
    return res.json(casesDengue);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
