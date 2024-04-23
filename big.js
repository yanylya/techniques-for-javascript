const intermediateAppPath = path.join(buildOutputPath, 'app');
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
[foo, bar] = [bar, foo];