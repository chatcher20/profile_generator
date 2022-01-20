const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

const surveySays = {};     //Object to push survey answers into

rl.question("What is your name? ", (answer) => {
  surveySays.Name = answer;

  rl.question("What is an activity you like doing? ", (answer) => {
    surveySays.Activity = answer;
    
    rl.question("What do you listen to while doing that? ", (answer) => {
      surveySays.Music = answer;
      
      rl.question("Which meal is your favourite? (Breakfast, Lunch, Supper, etc.) ", (answer) => {
        surveySays.Meal = answer;

        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          surveySays.Food = answer;

          rl.question("Which sport is your absolute favourite? ", (answer) => {
            surveySays.Sport = answer;
            
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              surveySays.Power = answer;
              
              console.log(`Thank you for your wonderful answers, ${surveySays.Name}!`);
              rl.close();
              let profile = `${surveySays.Name} likes listening to ${surveySays.Music} while ${surveySays.Activity}. They love eating ${surveySays.Food} for their favourite meal, ${surveySays.Meal}. Their favourite sport is ${surveySays.Sport}, and they are AMAZING at ${surveySays.Power}!`;
              output.write(` \nProfile:\n${profile}\n\n`);

            })
          })
        })
      })
    })
  })
});

/*

Here is my profile - might be a good Tinder bio... enjoy!

vagrant [profile_generator]> node survey.js
What is your name? Chris "the Rock" Hatcher
What is an activity you like doing? Skiing
What do you listen to while doing that? The Story So Far
Which meal is your favourite? (Breakfast, Lunch, Supper, etc.) Breakfast
What's your favourite thing to eat for that meal? Pancakes with Maple Syrup
Which sport is your absolute favourite? Hockey
What is your superpower? In a few words, tell us what you are amazing at! Singing
Thank you for your wonderful answers, Chris "the Rock" Hatcher!
 
Profile:
Chris "the Rock" Hatcher likes listening to The Story So Far while Skiing. They love eating Pancakes with Maple Syrup for their favourite meal, Breakfast. Their favourite sport is Hockey, and they are AMAZING at Singing!

vagrant [profile_generator]>

*/

