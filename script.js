let username = document.getElementById('username');
let password = document.getElementById('password');
const logIn = document.querySelector('.log-in-button');
const successfully = document.querySelector('.successfully');
const failed = document.querySelector('.failed');


logIn.addEventListener('click',function(){
    if(username.value && password.value){
        logInCheck(username.value,password.value);
    }
});
function logInCheck(u,p){
    if(localStorage.getItem(u)===null){
        failed.classList.add('show');
        successfully.classList.add('show')
    }else if(localStorage.getItem(u)===p){
        successfully.classList.add('show');
        failed.classList.remove('show');
    }else{
        failed.classList.add('show');
        successfully.classList.remove('show')
    }

}
//SIGN UP
const signUpButton = document.querySelector('.sign-up-button');
signUpButton.addEventListener('click', function(){
    if(username.value && password.value){
        signUpCheck(username.value,password.value);
    }
});
function signUpCheck(u,p){
    if(localStorage.getItem(u)===null){
        signUp(u,p);
        failed.classList.remove('show');
        
    }else{
        console.log('choose a different name');
        failed.classList.add('show');
        successfully.classList.remove('show')
    }
}
function signUp(u,p){
    localStorage.setItem(u,p);
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    successfully.classList.add('show');
    failed.classList.add('hide');
}
/*let guy = 'password';
let guySerialized = JSON.stringify(guy);
localStorage.setItem('imie', guy);
console.log(localStorage.imie)
*///

