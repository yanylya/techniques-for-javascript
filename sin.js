const results = await Promise.all(resultingPromises);
const isEmptyArray = arr => !arr.length;
const daysDiff = (date, date2) => Math.ceil(Math.abs(date - date2) / 86400000);