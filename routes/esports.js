const router = require("express").Router();
const moment = require("moment");
const fetch = require("node-fetch");

//Gets the current date and formats it to fit the requirements for the api.
const date = moment().format("YYYY-MM-DD");
const defaultDate = "2019-11-08";

//Get route to fetch CSGO results for the current date
router.get("/", async (req, res) => {
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/schedules/${defaultDate}/results.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    const arr = data.results;
    //Reverse the array to display the events in order
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

//Route calls API for match schedule
router.get("/schedule", async (req, res) => {
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/schedules/${date}/schedule.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.log(err);
    res.send({ message: err });
  }
});

//Route gets team information. Will be used to fetch two team data in order to compare them.
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

//Will get match statistics depending on the match id provided eto the route.
//This route will specifically return the sport_event and sport_event_status portion of the json.
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

//Since the timeline of CSGO matches is extremely long. I made a specific call to fetch only the timeline of a match.
//To use this route you need a match id. ***Note. With SportRadar, NOT all matches have a timeline. ***
router.get("/match/timeline/:match_id", async (req, res) => {
  const { match_id } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/matches/${match_id}/timeline.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    const arr = data.timeline;

    //Since I am only creating a timeline of the end results of rounds. I narrowed down the timeline portion of the json
    //to the end result of the round.
    const dat = arr.filter(ent => {
      return (
        ent.winning_reason == "bomb_defused" ||
        ent.winning_reason == "terrorists_win" ||
        ent.winning_reason == "counter_terrorists_win" ||
        ent.winning_reason == "target_saved" ||
        ent.winning_reason == "target_bombed"
      );
    });
    res.send(dat);
  } catch (err) {
    console.log(err);
  }
});

//This call gets the statistics for the match specified
router.get("/match/summary/:match_id", async (req, res) => {
  const { match_id } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/matches/${match_id}/summary.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

//This route will get specific information for the player specified. Used to compare different players,
//while comparing teams.
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

//This route gets teams that are provided by the API. Unfortunately the list of the teams exceeds 1000,
//which will cause a delay in fetching the large number of teams. For this reason, we are filtering out the data provided
//by the api to show only those active and popular CSGO esports teams.
router.get("/teams", async (req, res) => {
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/teams.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    const arr = data.teams;

    //Filters the response givent by the fetch get request.
    const dat = arr.filter(ent => {
      return (
        ent.name == "Cloud9" ||
        ent.name == "Astralis" ||
        ent.name == "Team Liquid" ||
        ent.name == "100 Thieves" ||
        ent.name == "Evil Geniuses" ||
        ent.name == "Team Vitality" ||
        ent.name == "Fnatic" ||
        ent.name == "Faze Clan" ||
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

router.get("/team/results/:teamid", async (req, res) => {
  const { teamid } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/teams/${teamid}/results.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    res.send(data.results);
  } catch (err) {
    console.log(err);
  }
});

router.get("/h2h/:team1/:team2", async (req, res) => {
  const { team1, team2 } = req.params;
  try {
    const response = await fetch(
      `http://api.sportradar.us/csgo-t1/en/teams/${team1}/versus/${team2}/matches.json?api_key=${process.env.CSGO_API_KEY}`
    );
    const data = await response.json();
    res.send(data.last_meetings.results);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
