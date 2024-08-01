const merge = Object.assign({}, obj1, obj2);
const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const uniqueArr = (arr) => [...new Set(arr)];