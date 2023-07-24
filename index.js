// 2d1ad7da-64e2-4a6b-a240-fbb11e2039dc
const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name:username},
            {headers: {"private-key": "798e769a-555e-47bf-9fb4-125980d778a9"}}
        )
        return res.status(r.status).json(r.data)
  } catch(e) {
    return res.status(e.response.status).json(e.response.data)
  }
  return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001);