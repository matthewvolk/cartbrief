require("dotenv").config();
const express = require("express");
const axios = require("axios");
const path = require("path");
const app = express();
const port = 4000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.get("/api/news", (req, res) => {
  /**
   * @todo allow user to control pageSize from front end
   * @todo allow user to send back which page they want to go to from front end
   */

  let { page, pageSize, sortBy } = req.query;
  /**
   * @note variables set below look to see if user has set value, otherwise it
   * defaults to a variable (1, 25, publishedAt)
   */
  page = page || 1;
  pageSize = pageSize || 25;
  sortBy = sortBy || "publishedAt";

  let url =
    `https://newsapi.org/v2/everything?` +
    `q=+ecommerce&` +
    `language=en&` +
    `sortBy=${sortBy}&` +
    `pageSize=${pageSize}&` +
    `page=${page}`;

  axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${process.env.NEWS_API_KEY}`
      }
    })
    .then(data => {
      data.data.pageSize = pageSize;
      res.send(data.data);
    })
    .catch(err => res.send(err));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
