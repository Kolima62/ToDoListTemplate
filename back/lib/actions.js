import { readFile, writeFile } from "node:fs/promises";

export async function getFromDataBase(fileName) {
  const todoList = await readFile(fileName, { encoding: "utf8" });
  return JSON.parse(todoList);
}

export async function saveToDatabase(data, filename) {
  await writeFile(filename, JSON.stringify(data), { encoding: "utf8" });
}
