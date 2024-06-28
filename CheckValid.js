const currentDate = () => new Date().toLocaleDateString('en-US');
const toggleBool = () => (bool = !bool);
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;