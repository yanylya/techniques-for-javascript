const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);
const merge = [...new Set([...a, ...b])];
const isEmptyObject = obj => Object.keys(obj).length === 0;
console.log("0 || 1 = "+(0 || 1));