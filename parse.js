const arrayContains = (arr, element) => arr.includes(element);
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();