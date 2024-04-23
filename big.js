const isTabInView = () => !document.hidden;
const stringReverse = str => str.split("").reverse().join("");
const appName = getAppName(channel);
const executableName = getExecutableName(channel, appName);