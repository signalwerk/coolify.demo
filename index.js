import express from "express";

// Constants
const PORT = 8085;

// App
const app = express();

app.get("/", (req, res) => {
  res.send(`
<pre style="font-size: 3rem">


Hello World. Test TeamTalk 2
<br>
env.TOKEN = '${process.env.TOKEN}'


</pre>
`);
});

// Middleware to log the method and URL for every request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});
