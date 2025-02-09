import express from "express";
import axios from 'axios';
const app = express();
const port = process.env.PORT || 3000;

const API_KEY = 'rnd_T9MOyyBvus73rpxhTd5R4ht7vjHO';
let result;

axios.get("https://api.render.com/v1/services", {
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
})
  .then(response => {
    result = response.data;
  })
  .catch(error => {
    console.error('Error:', error);
  });

app.get("/", (req, res) => res.type('JSON').send(result));

app.listen(port, () => console.log(`app listening on port ${port}!`));