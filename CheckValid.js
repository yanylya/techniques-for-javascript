const goToTop = () => window.scrollTo(0, 0);
const channel = getChannel(computedAppVersion);
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;