export function diffInSeconds(d1: Date, d2: Date) {
  const milliseconds = Math.abs(d1.getTime() - d2.getTime());
  return Math.floor(milliseconds / 1000);
}

// ChatGPT wrote this function, I'll blame it if there is any error ._.
export function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  const formattedHours =
    hours > 0 ? `${hours.toString().padStart(2, "0")}:` : "";
  const formattedMinutes = `${minutes.toString().padStart(2, "0")}:`;
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return formattedHours + formattedMinutes + formattedSeconds;
}
