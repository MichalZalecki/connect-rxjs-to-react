const express = require("express");
const compression = require("compression");
const path = require("path");

const app = express();

app.set("x-powered-by", false);

app.use(compression());
app.use(express.static("build", {
  // etag: false
}));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("build/index.html"));
});

const listener = app.listen(process.env.PORT || 8080, () => {
  console.log("express started at port %d", listener.address().port);
});
