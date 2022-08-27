import { readFile } from "fs";

const Todo = readFile("./src/components/something.txt", "utf-8", (e, res) => {
  if (e) throw e;
  console.log(res);
});
