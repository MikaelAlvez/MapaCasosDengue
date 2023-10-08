import { db } from "../infra/db/mongo-service.js";
export const Dengue = db.collection("dengues");
