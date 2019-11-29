const router = require("express").Router();
const fetch = require("node-fetch");

router.get("/score", async (req, res) => {
  try {
    const response = await fetch(
      `https://allsportsapi.com/api/cricket/?met=Fixtures&APIkey=a70fe4b0fdc1658c1ad896a8fc2958aaa62c6ed78a2fa38740d9c334e2ad3ecd&from=2019-03-13&to=2019-03-13
      `
    //cricket API Fixtures
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
      `https://allsportsapi.com/api/cricket/?met=H2H&APIkey=a70fe4b0fdc1658c1ad896a8fc2958aaa62c6ed78a2fa38740d9c334e2ad3ecd&firstTeamId=30&secondTeamId=5
      `
          //cricket API H2H
    );
    const data = await response.json();

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.json({ message: "Server Error" });
  }
});

module.exports = router;
