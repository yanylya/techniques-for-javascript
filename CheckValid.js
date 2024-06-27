const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
const greetings = age < 18 ? 'You are not old enough' : 'You are young!';