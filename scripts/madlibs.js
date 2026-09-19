let  name = prompt("A name:");
let adjective = prompt("An adjective:");
let noun = prompt("A noun:");
let verb = prompt("A verb:");
let name2 = prompt("Name 2:");
let style = prompt("Fancy or silly?");
let closings  = [
  "You are a legend.",
  "Stay golden.",
  "Signs point to awesome.",
];
function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

//let  name = "Girly";
//let adjective = "funny";
//let noun = "ball";
//let verb = "run";
//let name2 = "Tony";

function makeCard() {
	if (style === "fancy") {
    console.log("Dearest " + name + ",");
  } else {
    console.log("YO " + name + "!");
  }
  console.log("Dear " + name + ",");
  console.log("You are as " + adjective + " as a " + noun + ".");
  console.log("Happy birthday from the generator.");
  //card2
  console.log("Hey " + name + ",");
  console.log("Can you come " + verb + " with " + name2);
  console.log(" to hang out.");
   let index = randomNumber(0, closings.length - 1);
  console.log(closings[index]);
};

//makeCard();
name = prompt("A name");
makeCard();