var DELIM_SIZE = 4;
const getParameters = (URL) => JSON.parse('{"' + decodeURI(URL.split("?")[1]).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') +'"}');
const value = ( 5 < 7 ) ? "True" : "False" ;
console.log(typeof typeof 1);