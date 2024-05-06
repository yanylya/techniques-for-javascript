var regexp  = new RegExp('{{([^}]+)}}', 'g');
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;