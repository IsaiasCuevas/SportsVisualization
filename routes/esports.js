const router = require("express").Router();
const moment = require("moment");
const fetch = require("node-fetch");

router.get("/", async (req, res) => {
  const date = moment().format("YYYY-MM-DD");
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/schedules/${date}/results.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    res.send({ message: "error" });
  }
});

router.get("/team/:team_id", (req, res) => {
  const { team_id } = req.params;
  res.send(team_id);
});
module.exports = router;
