module.exports = {
  "outputDir": "C:\\Users\\henry\\Documents\\GitHub\\SportsVisualization\\public",
  "devServer": {
    "proxy": {
      "": {
        "target": "http://localhost:8000"
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}