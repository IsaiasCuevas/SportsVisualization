const router = require("express").Router();
const moment = require("moment");
const fetch = require("node-fetch");

const date = moment().format("YYYY-MM-DD");

router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/schedules/2019-11-08/results.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    const arr = data.results;
    const newArr = arr.reverse();
    const dat = newArr.filter(ent => {
      return ent.sport_event_status.match_status == "ended";
    });

    res.send(dat);
  } catch (err) {
    console.log(err);
    res.send({ message: err });
  }
});

router.get("/schedule", async (req, res) => {
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/schedules/${date}/schedule.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    console.log(data);

    res.send(data);
  } catch (err) {
    console.log(err);
    res.send({ message: err });
  }
});

router.get("/team/:team_id", async (req, res) => {
  const { team_id } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/teams/${team_id}/profile.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    res.send({ message: "error" });
  }
});

router.get("/match/:match_id", async (req, res) => {
  const { match_id } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/matches/${match_id}/timeline.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    res.send({ data: data.sport_event, sport: data.sport_event_status });
  } catch (err) {
    console.log(err);
  }
});

router.get("/match/timeline/:match_id", async (req, res) => {
  const { match_id } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/matches/${match_id}/timeline.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    const arr = data.timeline;
    const dat = arr.filter(ent => {
      return (
        ent.winning_reason == "bomb_defused" ||
        ent.winning_reason == "terrorists_win" ||
        ent.winning_reason == "counter_terrorists_win" ||
        ent.winning_reason == "target_saved"
      );
    });
    res.send(dat);
  } catch (err) {
    console.log(err);
  }
});

router.get("/player/:player_id", async (req, res) => {
  const { player_id } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/players/${player_id}/profile.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.get("/teams", async (req, res) => {
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/teams.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    const arr = data.teams;

    const dat = arr.filter(ent => {
      return (
        ent.name == "Cloud9" ||
        ent.name == "Astralis" ||
        ent.name == "Team Liquid" ||
        ent.name == "100 Thieves" ||
        ent.name == "Evil Geniuses" ||
        ent.name == "Team Vitality" ||
        ent.name == "Fnatic" ||
        ent.name == "Faze" ||
        ent.name == "Natus Vincere" ||
        ent.name == "Furia Esports" ||
        ent.name == "Mibr" ||
        ent.name == "G2 Esports" ||
        ent.name == "Mousesports" ||
        ent.name == "ENCE"
      );
    });
    res.send(dat);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
