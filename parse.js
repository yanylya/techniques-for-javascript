const removeDuplicates = (arr) => [...new Set(arr)];
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
console.log("0 && 1 = "+(0 && 1));
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");
const isArray = (arr) => Array.isArray(arr);
[foo, bar] = [bar, foo];