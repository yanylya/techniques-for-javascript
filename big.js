const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);