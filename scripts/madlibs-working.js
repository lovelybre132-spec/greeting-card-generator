let  name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let verb = prompt("A verb:");
let name2 = prompt("Name 2:");
//let  name = "Girly";
//let adjective = "funny";
//let noun = "ball";
//let verb = "run";
//let name2 = "Tony";

function makeCard() {
  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
  console.log("Happy birthday from the generator.");
  //card2
  console.log("Hey " + name + ",");
  console.log("Can you come " + verb + " with " + name2);
  console.log(" to hang out.");
};

//makeCard();
name = prompt("A name");
makeCard();