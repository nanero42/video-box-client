export function secondsToHHMMSS(totalSeconds: number) {
  let hours: any = Math.floor(totalSeconds / 3600);
  let minutes: any = Math.floor((totalSeconds - (hours * 3600)) / 60);
  let seconds: any = Math.floor(totalSeconds - (hours * 3600) - (minutes * 60));

  // Padding the values to ensure they are two digits
  if (hours < 10) { hours = "0" + hours; }
  if (minutes < 10) { minutes = "0" + minutes; }
  if (seconds < 10) { seconds = "0" + seconds; }

  return hours + ':' + minutes + ':' + seconds;
}

export function takeScreenshot(video: HTMLVideoElement) {
  const w = video.videoWidth;
  const h = video.videoHeight;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  ctx?.drawImage(video, 0, 0, w, h);
  const encodedImg = canvas.toDataURL('image/jpg');

  // document.body.appendChild(canvas);

  /*
  // shorten url like this: blob:http://localhost:4200/89ed9e3a-5241-46f9-ba8a-3c517f2bbcf3

  const output = data.replace(/^data:image\/(png|jpg);base64,/, "");

  const byteCharacters = atob(output);
  const byteNumbers = new Array(byteCharacters.length);
  for (let i = 0; i < byteCharacters.length; i++) {
    byteNumbers[i] = byteCharacters.charCodeAt(i);
  }
  const byteArray = new Uint8Array(byteNumbers);
  const blob = new Blob([byteArray], {type: 'image/gif'});
  const imageUrl = URL.createObjectURL(blob);
  */

  // window.open(imageUrl, '_blank');

  return encodedImg;
}
