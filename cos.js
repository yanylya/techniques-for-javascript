const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const maxNumber = arr => Math.max(...arr);
const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);