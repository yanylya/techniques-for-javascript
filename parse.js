const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf());
const docsOutputPath = path.join(repositoryRootPath, 'docs', 'output');