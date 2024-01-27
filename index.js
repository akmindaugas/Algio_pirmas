const logIn = document.getElementById('logInId');
logIn.addEventListener('click', ()=>{
    prompt ('login');
    prompt ('password');
}) ;
// document.addEventListener('DOMContentLoaded', function () {
// const LtLanguage = document.getElementById('LtContent');
// LtLanguage.addEventListener('click',()=>{
//     console.log ('LT Content');
// const aboutId = document.getElementById('aboutId');
// aboutId.innerText = "Apie mus";
// const productId = document.getElementById('productId');
// productId.innerText = "Produktai";
// const serviceId = document.getElementById('serviceId');
// serviceId.innerText = "Paslaugos";
// const partnersId = document.getElementById('partnersId');
// partnersId.innerText = "Partneriams";

// logIn.innerText = "Prisijungti";
// const contactId = document.getElementById('contactId');
// contactId.innerText = "Susisiekime:";
// const h1Id = document.getElementById('h1Id');
// h1Id.innerText = "Programinės įrangos sprendimai verslui";

// });

// const EnLanguage = document.getElementById('EnContent');
// EnLanguage.addEventListener('click',()=>{
//     console.log ('EN Content');
// const aboutId = document.getElementById('aboutId');
// aboutId.innerText = "About us";
// const productId = document.getElementById('productId');
// productId.innerText = "Products";
// const serviceId = document.getElementById('serviceId');
// serviceId.innerText = "Servise";
// const partnersId = document.getElementById('partnersId');
// partnersId.innerText = "For Partners";

// logIn.innerText = "Login";
// const contactId = document.getElementById('contactId');
// contactId.innerText = "Contact us:";
// const h1Id = document.getElementById('h1Id');
// h1Id.innerText = "Software solutions for business";
// });
// });
document.addEventListener('DOMContentLoaded', function () {
    const LtLanguage = document.getElementById('LtContent');
    LtLanguage.addEventListener('click', () => {
        console.log('LT Content');
        updateLinkText('aboutId', "Apie mus");
        updateLinkText('productId', "Produktai");
        updateLinkText('serviceId', "Paslaugos");
        updateLinkText('partnersId', "Partneriams");
        updateLinkText('logInId', "Prisijungti");
        updateLinkText('contactId', "Susisiekime");
        updateLinkText('h1Id', "Programinės įrangos sprendimai verslui");
    });

    const EnLanguage = document.getElementById('EnContent');
    EnLanguage.addEventListener('click', () => {
        console.log('EN Content');
        updateLinkText('aboutId', "About us");
        updateLinkText('productId', "Products");
        updateLinkText('serviceId', "Servise");
        updateLinkText('partnersId', "For Partners");
        updateLinkText('logInId', "Login");
        updateLinkText('contactId', "Contact us:");
        updateLinkText('h1Id', "Software solutions for business");
    });

    function updateLinkText(elementId, newText) {
        const linkElement = document.getElementById(elementId).querySelector('a');
        if (linkElement) {
            linkElement.innerText = newText;
        }
    }
});

