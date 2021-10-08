let meeples = [];
var job = ["teacher", "doctor", "pilot", "none"];
let meeplesId = document.getElementById("meeples");

for(let i = 0; i < 20; i++) {
  meeples.push( { name: "Meeple #"+i, age: Math.floor(Math.random() * 50), 
                job: job[Math.floor(Math.random()*job.length)]});
    console.log(meeples[i]);
}

console.log("");

//first button
function age(){
    for(let i = 0; i < meeples.length; i++) {
        meeples[i].age ++;
        if (meeples[i].age > 18 & meeples[i].job == "none"){
            meeples[i].job = job[Math.floor(Math.random()*2)];
        }
        if(meeples[i].age >= 55){
            chance = Math.random();
            if(chance > 0.5){
                meeples.splice(i, 1);
            }
        }
        console.log(meeples[i]);
    }
    console.log(" ");
}


//second button
function show(){
    meeplesId.innerHTML = JSON.stringify(meeples, null, 1);
    meeples = [];
}


//third button
function add(){
    meeplesId.innerHTML = "";
    meeples.push()
}

//log out the contents of meeples.. what is in it?

//When a button is pressed
    // loop through the meeples
    //add one to their age
    //if their age is greater than 18 and they don't have a job..
         //set their job to (randomly) teacher, doctor, pilot
    //if their age is greater than 55
          // on a 50% chance
          // remove them from the array

//When a different button is pressed
   // clear out old data
    // write the content ofthe array to the screen

//when a  third button is pressed

  // add a new person to the meeples array