const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');