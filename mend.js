var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

/* YOUR CODE HERE */
function mend(clothing_item) {
  for (let i = 0; i < clothing_item.length; i++) {
    var checkLetter = clothing_item[i];
    if (checkLetter === "/") {
      clothing_item = clothing_item.slice(0, i) + clothing_item.slice(i+1, clothing_item.length);
      console.log(clothing_item);
    }
  }
  return clothing_item;
}


var mended_clothes = torn_clothes.map(mend);
console.log(mended_clothes);
/* PRINT RESULT */
console.log("--> Finished running mend.js");
