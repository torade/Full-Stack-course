import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world'

//url object
const urlObject = new URL(urlString);
console.log(urlObject.pathname);

//format
console.log(url.format(urlObject));

//import.meta.url
console.log(import.meta.url);

// fileURLToPath
console.log(url.fileURLToPath(import.meta.url));

console.log(urlObject.search);

const params = new URLSearchParams(urlObject.search);

params.append('limit', '5');
console.log(params.get('q'));
