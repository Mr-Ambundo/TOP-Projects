const loginForm = document .querySelector('.login');
const registerForm = document.querySelector('.register');
const loginBtn = document.querySelector('#loginlink');
const registerBtn = document.querySelector('#registerlink');
const closeBtn = document.querySelector('.close-btn');

//setups
loginForm.style.visibility = 'visible';
loginForm.style.position = 'absolute';

registerForm.style.visibility = 'hidden';

//event listeners
registerBtn.addEventListener('click', () => {
    loginForm.style.visibility = 'hidden';
    loginForm.style.position = 'absolute';

    registerForm.style.visibility = 'visible';
    registerForm.style.position = 'relative';
}
)

loginBtn.addEventListener('click', () => {
    loginForm.style.visibility = 'visible';
    loginForm.style.position = 'relative';

    registerForm.style.visibility = 'hidden';
    registerForm.style.position = 'absolute';
}
)

//post request to backend
   
    //signup
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    console.log(data);
    alert(data.error || data.message);
})

    //login
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }); 
    const data = await res.json();
    console.log(data);
    alert(data.message);
})
