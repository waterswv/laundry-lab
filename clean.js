var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

/* YOUR CODE HERE */
function clean(clothing_item){
return clothing_item.replace("*","");
}


/* PRINT RESULT */
console.log("--> Finished running clean.js");
cleaned_clothes = dirty_clothes.map(clean);
console.log(cleaned_clothes);
