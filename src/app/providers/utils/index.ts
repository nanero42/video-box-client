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
