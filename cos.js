const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const merge = (a, b) => [...a, ...b];