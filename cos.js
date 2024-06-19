const removeDuplicates = (arr) => [...new Set(arr)];
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;