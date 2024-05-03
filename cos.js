const isEmptyArray = arr => !arr.length;
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();