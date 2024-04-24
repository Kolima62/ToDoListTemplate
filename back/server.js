import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import express from "express";
import cors from "cors";
import { getFromDataBase, saveToDatabase } from "./lib/actions.js";

const dir = dirname(fileURLToPath(import.meta.url));
const fileName = join(dir, "database", "db_todos.json");

// const fileName2 = join(dir, "server.js");

// const openFile2 = await open(fileName, "a");
// openFile2.write(" jsp");
// openFile2.close();

// Ouvrir le fichier

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`Le serveur a bien démarré sur le port ${port}`);
});

app.get("/todo-list", async (req, res) => {
  await getFromDataBase(fileName).then((r) => res.send(r));
});

app.post("/todo-list", async (req, res) => {
  await saveToDatabase(req.body, fileName).then(() => res.send(req.body));
});
