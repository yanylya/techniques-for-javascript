const isTabInView = () => !document.hidden;
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));