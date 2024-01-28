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
        updateElementContent('aboutId', "Apie mus");
        updateElementContent('productId', "Produktai");
        updateElementContent('serviceId', "Paslaugos");
        updateElementContent('partnersId', "Partneriams");
        updateElementContent('logInId', "Prisijungti");
        updateElementContent('contactId', "Susisiekime:");
        updateElementContent('h1Id', "Programinės įrangos sprendimai verslui");
    });

    const EnLanguage = document.getElementById('EnContent');
    EnLanguage.addEventListener('click', () => {
        console.log('EN Content');
        updateElementContent('aboutId', "About us");
        updateElementContent('productId', "Products");
        updateElementContent('serviceId', "Servise");
        updateElementContent('partnersId', "For Partners");
        updateElementContent('logInId', "Login");
        updateElementContent('contactId', "Contact us:");
        updateElementContent('h1Id', "Software solutions for business");
    });

    function updateElementContent(elementId, newText) {
        const element = document.getElementById(elementId);
        if (element) {
            // Check if the element contains an anchor tag
            const linkElement = element.querySelector('a');
            if (linkElement) {
                linkElement.innerHTML = newText;
            } else {
                element.innerText = newText;
            }
        }
    }
});


