const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
const allResults = await Promise.all(items.map(async (item) => {}));
const getRandomBoolean = () => Math.random() >= 0.5;