var ghpages = require("gh-pages");

ghpages.publish("build", function (err) {
  if (err) {
    return console.log(err);
  } else {
    return console.log("Deploy con exito");
  }
});
