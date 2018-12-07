# sipit

A CLI-ified version of [the npm drinking game](https://twitter.com/sindresorhus/status/515511151669805056).

**Usage:**

via npx:
```
npx sipit <name>
```

as a gloal module:
```
npm i -g sipit
sipit <name>
```

**Purpose:**
An npm drinking game. If `<name>` exists, you take a sip. If `<name>` doesn't exist, you don't. It's pretty simple really.

**Inspiration:**

This took me less than an hour to build while watching Destiny 2 streamers prep for a raid. Had an itch to build something, so I did.

* Sara Vieira [tweeted](https://twitter.com/NikkitaFTW/status/1070810573938573312) out that she'd built [npmdrinkinggame.party](https://npmdrinkinggame.party/) today and it was interesting to me
* Just before starting to work on this I saw [a tweet](https://twitter.com/sindresorhus/status/515511151669805056) from Sindre about an npm drinking game.

I've been loving npx so figured it would be a good way to make Sindre's drinking game portable, and without actually installing modules in whatever your current working directory. Let's face it, if you're playing this game you probably won't care what you do to the current working directory until tomorrow... at which point you'll regret running 500 `npm install`s.

Be responsible with your drinking ❤️