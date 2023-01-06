
// 1. Byt namn på första hoodien från Ash till Potato.
let namePotato = document.querySelectorAll('article h3')[0];
namePotato.innerHTML = 'Potato';


// 2. Byt namn på Home till Start.
let homeNameChange1 = document.querySelectorAll('a')[0];
let homeNameChange2 = document.querySelectorAll('a')[3];
homeNameChange1.innerText = 'Start';
homeNameChange2.innerText = 'Start';

// 3. Byt namn på Contact till Mail Us.
let mail1 = document.querySelectorAll('a')[2];
let mail2 = document.querySelectorAll('a')[5];
mail1.innerText = 'Mail Us';
mail2.innerText = 'Mail Us';

// 4. Byt ut informationen om Sinus Hoodie - Fire.
let fireInfo = document.querySelectorAll('article p')[1];
fireInfo.innerHTML = 'Wow!';

// 5. Byt bakgrundsfärg och text på en knapp.
let buttonChange = document.getElementsByTagName('button')[1];
buttonChange.innerHTML = 'Yay!';
buttonChange.style.backgroundColor = 'hotpink';

// 6. Byt bakgrundsfärg på någon av produkterna.
let color = document.querySelectorAll('figure')[0];
color.style.backgroundColor = '#9c30cf';

// 7. Byt ut adressen på sidan.
let newAddress = document.querySelectorAll('article p')[3];
newAddress.innerHTML = '<p>Cool skateboards <br> CoolRoad 13 <br> 133 37, Coolness</p>';

// 8. Byt färg på samtliga <p>.
let allPColor = document.querySelectorAll('p');

for (let i = 0; i < allPColor.length; i++) {
    allPColor[i].style.color = '#9a33cc';
}

// 9. Ändra text på samtliga knappar till add to cart.
let allBtnName = document.querySelectorAll('button');
for (let i = 0; i < allBtnName.length; i++) {
    allBtnName[i].innerHTML = 'Add to cart';
}

// 10. Lägg till classen active på menyalternativet home.
let newClass1 = document.querySelectorAll('a')[0];
let newClass2 = document.querySelectorAll('a')[3];
newClass1.classList.add('active');
newClass2.classList.add('active');

// 11. Ta bort classen logo på logotypen.
let noLogo = document.querySelector('.logo');
// noLogo.classList.remove('logo');

// 12. Lägg till ett nytt menyalternativ.
let newMenuItem = document.createElement('a');
newMenuItem.innerHTML = 'CoolThing';
let menu = document.querySelector('nav');
menu.prepend(newMenuItem);

// 13. Lägg till en ny produkt med följande info.
let newProd = document.querySelector('main');
newProd.insertAdjacentHTML('beforeend', 
'<article>' +
'<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>' +
'<h2>Sinus Hoodie</h2>' +
'<h3>Forrest</h3>' +
'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>' +
'</article>');

// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
let logoClick = document.querySelector('.logo');
logoClick.addEventListener('click', function() {
    console.log('Found you!');
});

// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".

