const uniqueArr = (arr) => [...new Set(arr)];
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const timeFromDate = date => date.toTimeString().slice(0, 8);