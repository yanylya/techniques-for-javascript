const scriptRootPath = path.join(repositoryRootPath, 'script');
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';