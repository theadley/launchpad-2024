export default function DateToString(date) {
  if (!date) date = now();

  return `
  ${date.getFullYear()}/${prependZero(date.getMonth() + 1)}/${prependZero(
    date.getDate()
  )} ${prependZero(date.getHours())}:${prependZero(
    date.getMinutes()
  )}:${prependZero(date.getSeconds())}`;
}

function prependZero(num) {
  if (num >= 10) return `${num}`;

  return `0${num}`;
}
