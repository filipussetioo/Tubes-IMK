const heroBtn = document.querySelector('.hero-btn');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const logoJohn = document.querySelector('.logo')
// const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const signinBtn = document.querySelector('.signin-btn');
// const signinbtn = document.querySelector('.signin-btn');
const signin = document.querySelector('.signin');
const signinpop = document.querySelector('.signinpop');
const exit = document.querySelector('#exit');

const signinBtn2 = document.querySelector('.signn');
const themeBtn = document.querySelector('.nav-link');
const fontBtn = document.querySelector('#change-font');

const btnCart = document.querySelectorAll('.btn');
const overCard = document.querySelectorAll('.card');
const profBtn = document.querySelector('.intro-button');

const dummyBtn = document.querySelector('.dummy-button');
const cartIcon = document.querySelector('.fa-shopping-cart');

const dummyCur = document.querySelector('.currency-idr');

let showMenu = false;

dummyCur.addEventListener('click',changeCur);
heroBtn.addEventListener('click',redirectCatalogue);
menuBtn.addEventListener('click', toggleMenu);
logoJohn.addEventListener('click',redirectHome);
signinBtn.addEventListener('click',signinPop);
exit.addEventListener('click',closeSignin);
signinBtn2.addEventListener('click',signIn);
themeBtn.addEventListener('click',changeTheme);
fontBtn.addEventListener('click',changeFont);
profBtn.addEventListener('click',redirectProfile);
dummyBtn.addEventListener('click',dummy);




function changeCur(){
    document.querySelector('.nav-drop-btn').innerHTML = "IDR";
}

let cartFeedback = false;
function dummy(){
    console.log("dummy");
    
    if(!cartFeedback){
        cartIcon.classList.replace('fa-shopping-cart','fa-cart-arrow-down');
        cartFeedback = true;
        
    }else{
        cartIcon.classList.replace('fa-cart-arrow-down','fa-shopping-cart');
        cartFeedback = false;
    }
}

function redirectProfile(){
    console.log("profile");
    window.location='profil.html';
}

function changeFont(){
    console.log("font");
    if(!showMenu){
        var listP = document.querySelectorAll("p");
        var listA = document.querySelectorAll("a");

        for(let i=0; i<listP.length; i++){
            listP[i].style.fontSize="1.7em";
        }

        for(let i=0; i<listA.length; i++){
            listA[i].style.fontSize="1.5em";
        }
        showMenu = true;
    }
    else{
        var listP = document.querySelectorAll("p");
        var listA = document.querySelectorAll("a");

        for(let i=0; i<listP.length; i++){
            listP[i].style.fontSize="1.3em";
        }
        for(let i=0; i<listA.length; i++){
            listA[i].style.fontSize="1.3em";
        }
        showMenu = false;
    }
    
    // document.querySelector("p").style.fontSize="3em";
}

function changeTheme(){
    console.log("theme");
    if(!showMenu){
        document.querySelector('.navbar').classList.add('dark');
        heroBtn.classList.add('dark');
        document.querySelector('.tool').classList.add('dark');
        document.body.style.backgroundColor="#121212";
        btnCart.forEach(item => item.classList.add('dark'));
        document.querySelector('.text-banner').classList.add('dark');
        document.querySelector('.footer').classList.add('dark');
        overCard.forEach(item => item.classList.add('dark'));
        document.querySelector('.content').style.color="black";
        showMenu = true;
    }
    else{
        document.querySelector('.navbar').classList.remove('dark');
        heroBtn.classList.remove('dark');
        document.querySelector('.tool').classList.remove('dark');
        document.body.style.backgroundColor="#fff";
        btnCart.forEach(item => item.classList.remove('dark'));
        document.querySelector('.text-banner').classList.remove('dark');
        document.querySelector('.footer').classList.remove('dark');
        overCard.forEach(item => item.classList.remove('dark'));
        showMenu = false;
    }
}

function signIn(){
    console.log("lala")
    signin.style.display="none";
    signinpop.style.display ="none";
}
function signinPop(){
    signin.style.display = "block";
    signinpop.style.display = "block";
}
function closeSignin(){
    console.log("close");
    alert("Login Failed");
    signin.style.display = "none";
    signinpop.style.display = "none";
    
}
function redirectHome(){
    console.log("home")
    window.location='index.html'
}

function redirectCatalogue(){
    console.log("catalogue")
    window.location='catalogue.html'
}

function toggleMenu() {
    console.log("tools");
    if (!showMenu) {
        
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        // menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        // menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

