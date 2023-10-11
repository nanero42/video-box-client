# VideoBoxClient

Local angular project version 16.0.3.

## Setup

### requirements
`node.js: ^16.13.0 || ^18.10.0`

### how to install
`npm install`

### how to run
1. Firstly, start server with `npm run start` command (download server [here](https://github.com/splyza/video-box-server/tree/main))
2. Then start client `npm run start`.

### features

1. Display all available videos.
2. Change videos list style between card and compact modes.
3. Page with detailed information about selected video.
4. Videoplayer features:
   1. Play / pause video by clicking ▶️ / ⏸️ buttons.
   2. Play / pause video by clicking on the video itself.
   3. Play / pause video by pressing Space button.
   4. Rewind / Fast forward to 5 seconds.
   5. Rewind video to specific timecode by clicking on video progressbar.
5. Make snapshot of the video on current time by clicking on Snapshot button below the video.
6. Make star reaction of the video on current time by clicking on Star button below the video.
7. Displaying all video reactions sorted by asc by timeframe field.
8. Each reaction item shows icon representing reaction type (Snapshot / Star), time when reaction was made, reaction maker name, reaction date, screenshot for Snapshot reactions and whitespace for Star reactions.
9. Rewind video to specific timecode by clicking on reaction item.
10. Highlight reaction item if it's timeframe field equals to the video's current time.
11. Disappearing star animation.
12. Sticky header.
13. Back to the video list button at the top left corner of the header.
