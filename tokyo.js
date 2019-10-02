const chalk = require('chalk');
const figlet = require('figlet');
const title = (text) => chalk.green(figlet.textSync(text, {font: 'Small Slant'}))

const output = `
${title('Welcome')}
${title('to')}
${title('Tokyo!')}
${chalk.blue('Hi Wanseob and Kendrick. Are you ready to visit Tokyo?')}
${chalk.blue('Here the plan for what we will do in the 3 days together!')}

${chalk.red('Japan is a very cash based society, and I can let you borrow some cash,')}
${chalk.red('but no one likes using cash so...')}

${chalk.green('Buy a SUICA card!')} https://www.jreast.co.jp/e/pass/suica.html#category10

${chalk.red('You can use it everywhere! For example:')}
- buses/trains
- convenience stores
- some chain restaurants
- supermarket and grocery stores
- vending machines

${chalk.yellow('How to get to my home')}

Google Maps work really well, so just click this link:

    https://goo.gl/maps/dFdgr2BAyp4Bur7S8

The closest station from my home is a 15-minute walk. There is a bus, but it is up to you
if you want to take it.

If you are landing in Haneda airport (HND), then it should take 30 to 40 minutes to get to my home.
If you are landing in Narita airport (NRT), then it should take 1.5 to 2 hours to get to my home.

Just follow Google Maps!

${chalk.yellow('Tokyo and Osaka')}

Two things are quite different in Osaka vs Tokyo: buses and escalator etiquette.

Buses in Tokyo
  - Get ON at the front door and tap your SUICA card
  - Get OFF at the rear door, no need to tap again

Buses in Osaka
  - Get ON at the rear door, tap your SUICA card
  - Get OFF at the front door, tap your SUICA card again

Escalators in Tokyo
  - Stand on the left, walk on the right

Escalators in Osaka
  - Stand on the right, walk on the left

If you get confused just follow what other people are doing!

${chalk.yellow('Schedule')}

${chalk.red('- 10/3(Thu):')} ${chalk.green('Night in Tokyo!')}

    - Dinner at an 80 year old tonkatsu store               
        - Tonkatsu Tonki (https://goo.gl/maps/wtKs1HxpVTsvhXvUA)
        - They close at 10:45pm so don't arrive too late!
    - Of course maybe we can have some drinks after dinner
    - We will spend the night in my small small room

${chalk.red('- 10/4(Fri):')} ${chalk.green('Trip to Hakone!')}

    - If we wake up early we might be able to do a short hike
    - If not, we can take the cable car to our traditional Japanese hotel (Ryokan)
    - Take a bath in the Ryokan onsen, relax, have fun
    - Breakfast and dinner is included at the Ryokan!

    ${chalk.yellow('Our Ryokan:')} https://goo.gl/maps/cS1bqHaWvaiRHkd67

${chalk.red('- 10/5(Sat):')} ${chalk.green('Kamakura by the Ocean!')}

    - Take the bus/train to Kamakura
    - Check in to our AirBnB
    - Check out the beach and do some surfing if the weather is good
    - Meet my friend who is the head of ConsenSys Japan
    - Have some drinks, relax, and sleep at the AirBnB

    ${chalk.yellow('Our AirBnB:')} https://goo.gl/maps/LErHBfDFtNZnjYUn7

${chalk.red('- 10/6(Sun):')} ${chalk.green('Back to the city!')}

    - We will check out of the AirBnB and return to Tokyo.
    - Then maybe we can all take a train to Osaka together!

${chalk.blue('Let me know what you think!')}
`

module.exports = () => {
  console.log(output)
}
