const chalk = require('chalk');
const figlet = require('figlet');
const title = (text) => chalk.green(figlet.textSync(text, {font: 'Small Slant'}))

const output = `
${title('Welcome')}
${title('to')}
${title('Seoul')}
${chalk.blue('Hi Adrian and Kendrick. Are you ready to visit Seoul?')}
${chalk.blue('I am so excited to see you guys in my home town.')}
${chalk.blue('Here is my idea about the schedule for your visiting')}
${chalk.blue('Please check it out and give me some feedback')}

${chalk.red('First of all, Google maps does not work in Korea. So you have to install Kakao map:')}
Android: https://play.google.com/store/apps/details?id=net.daum.android.map&hl=en
iOS: https://itunes.apple.com/us/app/kakaomap-korea-no-1-map/id304608425?mt=8

${chalk.yellow('How to get to \'nonce\'')}
1. Move to the gateway to take the airport express(AREX) to Seoul
2. You can buy a transporation card there. Top up about 10,000 KRW
3. Take 'all stop train'
4. Transfer to the line number 9 at the 'Gimpo airport station'. 
   You can see the line number 9 platform right in front of you.
   Line number 9 has two types of train, express and all-stop. You should take the ${chalk.red('express')}.
5. Get down at '신논현 Sinnonhyeon station'
6. Now, you should climb the hill to 'nonce'. Turn on the Kakao map and climb! yayyyyyy
Here's the map link
http://kko.to/hap7wYj0M

${chalk.yellow('Schedule')}

- 5/25(Sat): Younghoon hosts his birthday party. You can meet many people who works in the blockchain field in Korea.
- 5/26(Sun): In nonce, there will be a hacking challenge. But I recommend you guys to go outside and enjoy Seoul.
             My suggestion is to go Han-gang park (Banpo). You should enjoy Chicken and beer there.
             http://kko.to/S-jHLYjjM
- 5/27(Mon): The first day of ETHCon Korea. We also have another party at 'nonce' from 7pm.
- 5/28(Tue): The 2nd day of conference. Speaker's party at 'Hashed lounge' from 7pm. Hashed hosts the party and it is one of the most trusted crypto funds in Korea.
- 5/29(Wed): Have some rest. Or you can go to the palace(경복궁 Kyong-bok-goong). http://kko.to/uNOzRY000
- 5/30(Thu): We'll go to Yang-yang to do surf. We'll stay a night there.
- 5/31(Fri): We'll climb the Seorak mountain and come back to Seoul
- 6/01(Sat): Flight

${chalk.blue('How do you think about this plan? Please let me know your ideas')}
`

module.exports = () => {
  console.log(output)
}
