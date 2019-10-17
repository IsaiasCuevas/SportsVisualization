const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/score/:start/:end", async (req, res) => {
  const { start, end } = req.params;
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${process.env.API_KEY}&from=${start}&to=${end}`
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
      `https://allsportsapi.com/api/football/?met=H2H&APIkey=${process.env.API_KEY}&firstTeamId=${team1}&secondTeamId=${team2}`
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

router.get("/getmatch/:matchid", async (req, res) => {
  const { matchid } = req.params;
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${process.env.API_KEY}&from=2017-05-23&to=2019-09-25&matchId=${matchid}`
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    res.status(500);
    res.json({ message: "Server Error" });
  }
});
router.get("/team/:teamid", async (req, res) => {
  const { teamid } = req.params;
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?&met=Teams&teamId=${teamid}&APIkey=${process.env.API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

module.exports = router;
