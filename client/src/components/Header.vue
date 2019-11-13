<template>
  <div class="header">
    <nav>
      <a id="smallLinkButton" href="/">{{title}}</a>
      <a id="navlink" href="/soccer">Soccer</a>
      <a id="navlink" href="#">Basketball</a>
      <a id="navlink" href="/esports">Esports</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["title"]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
.header {
  font-family: "Oswald", sans-serif;
  background-color: #ffffff;
  height: 75px;
  max-height: 150px;
  font-size: 54px;
  border-bottom: 1px solid black;
  margin: 0 auto;
  padding-top: 20px;
}
#smallLinkButton:hover,
active,
visited {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
#smallLinkButton {
  margin-left: 10px;
  margin-right: 10px;
  color: black;
}
#navlink {
  margin: 5px;
  padding-bottom: 5px;
  text-align: center;
  font-size: 24px;
  color: black;
}
#navlink:hover,
active,
visited {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>