const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;