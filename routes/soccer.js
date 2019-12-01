const router = require("express").Router();
const fetch = require("node-fetch");

//Call is used to return the soccer matches that occured in the dates that one provides to the call
router.get("/score/:start/:end", async (req, res) => {
  const { start, end } = req.params;
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${process.env.SOCCER_API_KEY}&from=${start}&to=${end}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

//This route returns a Head to Head of the two team ids that one provides.
router.get("/compare/:team1/:team2", async (req, res) => {
  const { team1, team2 } = req.params;
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?met=H2H&APIkey=${process.env.SOCCER_API_KEY}&firstTeamId=${team1}&secondTeamId=${team2}`
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

//This route will ONLY provide data for the specific match that one chooses.
router.get("/getmatch/:matchid", async (req, res) => {
  const { matchid } = req.params;
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${process.env.SOCCER_API_KEY}&from=2019-09-11&to=2020-09-25&matchId=${matchid}`
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
      `https://allsportsapi.com/api/football/?&met=Teams&teamId=${teamid}&APIkey=${process.env.SOCCER_API_KEY}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

//Used the allsports api match call and manipulated the data to only return what was needed to make a match timeline.
//The call returns important events that occur during the match along with the team that they correspond to and the minute they occur.
router.get("/timeline/:matchid", async (req, res) => {
  const { matchid } = req.params;
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/football/?met=Fixtures&APIkey=${process.env.SOCCER_API_KEY}&from=2019-09-11&to=2020-09-25&matchId=${matchid}`
    );
    const data = await response.json();
    const goals = data.result[0].goalscorers;
    const cards = data.result[0].cards;
    const subs = data.result[0].substitutes;
    const timeline = goals;
    tl = [];
    for ({ time, home_scorer, score, away_scorer } of goals) {
      if (time.length > 2) {
        time = time.slice(0, 2);
      }
      if (home_scorer === "") {
        tl.push({
          time,
          person: away_scorer,
          info: score,
          type: "goal",
          team: "away"
        });
      } else if (away_scorer === "") {
        tl.push({
          time,
          person: home_scorer,
          info: score,
          type: "goal",
          team: "home"
        });
      }
    }
    for ({ time, home_fault, away_fault, card } of cards) {
      if (time.length > 2) {
        time = time.slice(0, 2);
      }
      if (home_fault == "") {
        tl.push({
          time,
          person: away_fault,
          info: card,
          type: "card",
          team: "away"
        });
      } else if (away_fault == "") {
        tl.push({
          time,
          person: home_fault,
          info: card,
          type: "card",
          team: "home"
        });
      }
    }
    for ({ time, home_scorer, away_scorer, scorer } of subs) {
      if (home_scorer.length < 1) {
        tl.push({
          time,
          person: away_scorer.in,
          info: away_scorer.out,
          type: "sub",
          team: "away"
        });
      }
      if (away_scorer.length < 1) {
        tl.push({
          time,
          person: home_scorer.in,
          info: home_scorer.out,
          type: "sub",
          team: "home"
        });
      }
    }
    res.json(tl);
  } catch (err) {
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

module.exports = router;
