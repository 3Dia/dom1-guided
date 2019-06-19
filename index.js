console.log('Connected to the console!');

// DOM- Document Object model (html as an object)

// select stuff from HTML (Elements)

const body = document.querySelector('body');
console.log(body);

const container = document.querySelector('.container');
console.log('container',container);

// CLASS

const lambdaButton = document.querySelector('#custom-btn');
console.log('lambdaButton', lambdaButton);

// const specificSection = document.querySelector('section.secondary-content' h2.services-header')


const paragraph = document.querySelector('p');
console.log(paragraph);


// querySelector All

const navLinks = document.querySelector('nav a');
console.log("querySelector", navLinks);

// versus

const navLinksAll=document.querySelectorAll('nav a');
console.log('querySelectorAll', navLinksAll);

// node list -->ARRAY LIKE!