import express from "express";

const app = express();

app.use(express.static("public/dist"));

app.get("/", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(3000, () => console.log("server started .."));
