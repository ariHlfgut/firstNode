// //exercise 1
// const fs = require("fs");
// fs.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) throw err;

//   console.log(data);
// });
// //exercise 2
// const fs2 = require("fs");
// fs2.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data.length);
// });
// //exercise 3
// const fs3 = require("fs");
// const lodash = require("lodash");
// const { join } = require("path");

// fs3.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) throw err;

//   let dataRevers = data.split(" ");
//   dataRevers = lodash.reverse(dataRevers);
//   dataRevers = dataRevers.join(" ");
//   console.log(dataRevers);
// });
//exercise 4
// const fs4 = require("fs");
// const lodash = require("lodash");
// const { join } = require("path");

// fs4.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) throw err;

//   let newData = data.split(" ");
//   newData = lodash.uniq(newData);
//console.log(newData.length);

//   newData = newData.join(" ");
//   console.log(newData);
//   console.log(newData.length);

// });

// //exercise 5
function exercise5() {
  const fs5 = require("fs");
  const lodash = require("lodash");
  const { join } = require("path");
  const stringCase = require("case-to-case");

  fs5.readFile("data.txt", "utf-8", (err, data) => {
    if (err) throw err;

    let newData = data.split(" ");
    newData = lodash.uniq(newData);
    newData = newData.join(" ");
    newData = newData.toUpperCase(newData);
    console.log(newData);
    console.log(newData.length);
    return newData;
  });
}
const { log } = require("console");
// exercise 6

// const fs6 = require("fs");
// const lodash = require("lodash");
// const { join } = require("path");
// const stringCase = require("case-to-case");

// fs6.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) throw err;

//   let newData = data.split(" ");
//   newData = lodash.uniq(newData);
//   console.log(newData.length);
//   newData = newData.filter((word) => word.length > 5);
//   newData = newData.join(" ");

//   console.log(newData);
//   console.log(newData.length);
// });

// // exercise 7

// const fs7 = require("fs");
// const lodash = require("lodash");
// const { join } = require("path");
// const stringCase = require("case-to-case");

// fs7.readFile("data.txt", "utf-8", (err, data) => {
//   if (err) throw err;

//   let newData = data.split(" ");
//   newData = lodash.uniq(newData);
//   console.log(newData.length);
//   newData = newData.filter((word) => word.length > 5);
//   newData = newData.join(" ");

//   console.log(newData);
//   console.log(newData.length);
// });
//// exercise 8
const fs = require("fs");
const { stringify } = require("querystring");
const util = require("util");
const stat = util.promisify(fs.stat);
function creteFile(data) {
  fun = String(data);
  fs.writeFile("message.txt", fun, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}
const t = exercise5();
console.log(t);
creteFile(exercise5(t));
