const fs = require("fs");

fs.unlink("text2.txt", (err) => {
  console.log(err);
});
