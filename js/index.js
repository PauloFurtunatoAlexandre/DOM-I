const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img").setAttribute('src', siteContent["nav"]["img-src"]);

let nav = document.querySelectorAll('div.container header nav a');
for(let item = 0; item < nav.length; item++) {
  // nav[item].textContent = siteContent['nav']['nav-item-' + [item]];
  nav[item].textContent = siteContent['nav']['nav-item-' + [item + 1]];
  nav[item].style.color = 'green';
}
console.log(nav);
const parentNavbar = document.querySelector('.container header nav');
console.log(parentNavbar);
const childElPrepend = document.createElement('a');
console.log(childElPrepend);
childElPrepend.textContent = 'PreLink';
childElPrepend.setAttribute('href', '#');
childElPrepend.style.color = "green";
parentNavbar.prepend(childElPrepend);

const childElAppend = document.createElement('a');
childElAppend.textContent = 'PostLink';
childElAppend.setAttribute('href', '#');
childElAppend.style.color = 'green';
parentNavbar.appendChild(childElAppend);

let cta = document.getElementById("cta-img").setAttribute('src', siteContent['cta']['img-src']);

let ctaH1 = document.querySelector('.cta .cta-text h1').textContent = siteContent['cta']['h1'];
let ctaButton = document.querySelector('.cta button').textContent = siteContent['cta']['button'];

let middleImage = document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);

let topContentH4 = document.querySelector('.main-content .top-content .text-content h4').textContent = siteContent['main-content']['features-h4'];

let topContentP = document.querySelector('.main-content .top-content .text-content p').textContent = siteContent['main-content']['features-content'];

let bottomContentHeaderOne = document.querySelector('.bottom-content .text-content:first-child h4');
bottomContentHeaderOne.textContent = siteContent['main-content']['about-h4'];
let bottomContentPOne = document.querySelector('.bottom-content .text-content:first-child p');
bottomContentPOne.textContent = siteContent['main-content']['about-content'];

let bottomContentHeaderTwo = document.querySelector('.bottom-content .text-content:nth-child(2) h4');
bottomContentHeaderTwo.textContent = siteContent['main-content']['services-h4'];
let bottomContentPTwo = document.querySelector('.bottom-content .text-content:nth-child(2) p');
bottomContentPTwo.textContent = siteContent['main-content']['services-content'];

let bottomContentHeaderThree = document.querySelector('.bottom-content .text-content:last-child h4');
bottomContentHeaderThree.textContent = siteContent['main-content']['product-h4'];
let bottomContentPThree = document.querySelector('.bottom-content .text-content:last-child p');
bottomContentPThree.textContent = siteContent['main-content']['product-content'];

let contactHeader = document.querySelector('.contact h4').textContent = siteContent['contact']['contact-h4'];

let contactP = document.querySelectorAll('.contact p');
contactP[0].textContent = siteContent['contact']['address'];
contactP[1].textContent = siteContent['contact']['phone'];
contactP[2].textContent = siteContent['contact']['email'];

let contactPOne = document.querySelector('section.contact p');

let footer = document.querySelector('footer p').textContent = siteContent['footer']['copyright'];