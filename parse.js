const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const executableName = getExecutableName(channel, appName);
const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));