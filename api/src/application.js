import express from "express";
import cors from "cors";
import { client } from "./infra/db/mongo-service.js";
import { routes } from "./infra/http/express/routes.js";
function application() {
  client
    .connect()
    .then(() => {
      const app = express();
      app.use(express.json());
      app.use(cors());
      app.use("/api", routes);
      app.listen(3001, () => console.log("Server is running on PORT 3001"));
    })
    .catch((err) => console.log(err));
}
application();
