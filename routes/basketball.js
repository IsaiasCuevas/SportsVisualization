const router = require("express").Router();
const fetch = require("node-fetch");
const path = require("path");

router.get("/scores", async (req, res) => {
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/basketball/?met=Fixtures&APIkey=${process.env.BB_API_KEY}&from=2019-08-23&to=2019-10-15`
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

router.get("/compare/:team1/:team2", async (req, res) => {
  const { team1, team2 } = req.params;
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/basketball/?met=Fixtures&APIkey=${process.env.BB_API_KEY}&firstTeamId=${team1}&secondTeamId=${team2}`
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

router.get("/bb-scores", async (req, res) => {
  try {
    const response = await fetch(
      `http://api.sportradar.us/nba/trial/v7/en/games/2018/REG/schedule.json?api_key=${process.env.SPORTRADAR_API_KEY}`
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

router.get("/gamesum/:game_id", async (req, res) => {
  const { game_id } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/nba/trial/v7/en/games/${game_id}/summary.json?api_key=${process.env.SPORTRADAR_API_KEY}`
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

router.get("/bb/:gbox_id", async (req, res) => {
  const { gbox_id } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/nba/trial/v7/en/games/${gbox_id}/boxscore.json?api_key=${process.env.SPORTRADAR_API_KEY}`
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

router.get("/boxscore/:id", (req, res) => {
  const { id } = req.params;
  res.sendFile(`/api/Game_Boxscore/${id}.json`, { root: __dirname });
});

router.get("/summary/:id", (req, res) => {
  const { id } = req.params;
  res.sendFile(`/api/Game_Summary/${id}.json`, { root: __dirname });
});

module.exports = router;
