export function secondsToHHMMSS(totalSeconds: any) {
  let h: any = Math.floor(totalSeconds / 3600);
  let m: any = Math.floor((totalSeconds - (h * 3600)) / 60);
  let s: any = Math.floor(totalSeconds - (h * 3600) - (m * 60));

  if (h < 10) { h = '0' + h; }
  if (m < 10) { m = '0' + m; }
  if (s < 10) { s = '0' + s; }

  return h + ':' + m + ':' + s;
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
