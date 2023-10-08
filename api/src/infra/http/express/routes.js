import { Router } from "express";
import { create } from "../../../use-cases/create-dengue-states.js";
import { getAllCasesDengue } from "../../../use-cases/get-all-cases-dengue.js";
const routes = Router();
routes.post("/cases-dengue", create);
routes.get("/cases-dengue", getAllCasesDengue);
export { routes };
