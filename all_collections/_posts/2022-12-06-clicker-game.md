---
layout: post
title: ClickeR 'Game'
date: 2022-12-06
categories: ["projects", "live"]
---
My kids wanted to randomly generate emoji's and have those descriptions read aloud.

[ClickeR 'Game'](https://chundersnatch.com/)

---

## Chundersnatch

A 'Game' wherein you click a button, generating a series of random emjoi's (and their descriptions as a paragraph).

The 'Player' can choose to have the browser speak the paragraph aloud, using a selected voice.

The player accumulates a "Score" and a 'High-Score'. (Saved in browser storage)

This is fairly useless and is intented as an annoyance machine for my kids to play with. (Written in MD/HTML/CSS/JS.)

## Game Legend

| UI item | description |
| :--- | :--- |
| 🔊 | Choose voice |
| 😃 | Show Emoji 'paragraph' |
| ✏️ | Show text 'paragraph' |
| Say This... | Speak the text (in ✏️) using the selected voice (in 🔊). |
| Stop Speaking! | Stops the voice currently speaking. |
| Pitch | Tune the pitch up or down (🐿 🆚 😈). |
| Rate | The speed at which the selected voice will speak the text. |

### FAQ

- Q: Can I change the speed/pitch?
- A: Yes! Click on the ✏️ icon and you will find both!

- Q: Why is the selected voice not working?
- A: You probably don't have that localized language pack installed in the browser. To fix this, change your system language. (<-- not responsible for your broken OS)

- Q: What do I win if I get the highest score?
- A: The satisfaction of knowing you created the largest nonsensical collection of partial & run-on sentences by clicking a button.

#### Roadmap

[ ] New UI (React/Vue/Angular)

[ ] Type in-> Emoji, output-> PlainText

[ ] Output Emoji List as SVG image

##### @raystanza

post updated @ {{ 'now' | date: "%s" }}
