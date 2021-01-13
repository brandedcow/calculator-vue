export default function isNumber(string) {
  return string.split('').every(char => RegExp(/[0-9]|\./).test(char))
}