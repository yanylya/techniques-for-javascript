const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const currentDate = () => new Date().toLocaleDateString('en-US');