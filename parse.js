const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const randomString = () => Math.random().toString(36).slice(2);
const symbolsPath = path.join(buildOutputPath, 'symbols');