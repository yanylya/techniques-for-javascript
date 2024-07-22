const lastElement = arr => arr[arr.length - 1];
const symbolsPath = path.join(buildOutputPath, 'symbols');
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;