import express from "express";
const app = express();
const port = 3000;

app.get("/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Atom Joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Scarecrow Joke",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 3,
      title: "Skeleton Joke",
      content:
        "Why don't skeletons fight each other? They don't have the guts.",
    },
    { id: 4, title: "Random Joke", content: "hi" },
  ];
  res.json(jokes); // better than res.send
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
