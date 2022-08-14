function login() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    fetch('https://web2-backend-souhailabenallal.herokuapp.com/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('token', data.token);
                window.location.href = 'home.html';
            } else {
                alert(data.message);
            }
        }
        );
}

function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}

function getToken() {
    return localStorage.getItem('token');
}

function register() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    fetch('https://web2-backend-souhailabenallal.herokuapp.com/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('token', data.token);
                window.location.href = 'home.html';
            } else {
                alert(data.message);
            }
        }
        );
}

