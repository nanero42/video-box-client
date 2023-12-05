# VideoBoxClient

Local angular project version 16.0.3.

## Screenshots
### home page, default view
<img width="1677" alt="Screen Shot 2023-12-05 at 5 19 37 PM" src="https://github.com/nanero42/video-box-client/assets/77396570/21155757-55ee-461e-855c-02a29f10a6df">

### home page, alternative view
<img width="1679" alt="Screen Shot 2023-12-05 at 5 20 51 PM" src="https://github.com/nanero42/video-box-client/assets/77396570/dfdd7c71-9017-4202-af4d-00a5c3fb5b1d">

### home page, video hovered
<img width="1679" alt="Screen Shot 2023-12-05 at 5 21 25 PM" src="https://github.com/nanero42/video-box-client/assets/77396570/945fe152-4951-4e66-a03a-95c4c28e9d4b">

### video page with snapshots
<img width="1676" alt="Screen Shot 2023-12-05 at 5 22 35 PM" src="https://github.com/nanero42/video-box-client/assets/77396570/26b17c96-4ea1-45c1-b893-31f06cb34e6b">

### video page with slowly disappearing star icon
<img width="1295" alt="Screen Shot 2023-12-05 at 5 25 27 PM" src="https://github.com/nanero42/video-box-client/assets/77396570/276bb5e0-040c-4d5f-96bf-e388dda27e87">

## Setup

### requirements
`node.js: ^16.13.0 || ^18.10.0`

### how to install
`npm install`

### how to run
1. Firstly, start server with `npm run start` command (download server from [here](https://github.com/splyza/video-box-server/tree/main)).
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
