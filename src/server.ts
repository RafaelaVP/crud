import "reflect-metadata";
import express from "express";

import "./api/infra/database";

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server running"));
