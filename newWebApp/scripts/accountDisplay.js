document.addEventListener('DOMContentLoaded', function() {
    const displayContainer = document.getElementById("displaySection");

    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");  
    console.log(isLoggedIn);
    

    // If user is logged in, display appropriate content
    if (isLoggedIn) {
        loggedIn();
    } else {
        loggedOut();
    }

    function loggedIn(){
        const parentSection = document.createElement("section");
        displayContainer.appendChild(parentSection);
        
        const loggedIn = document.createElement("div");
        parentSection.appendChild(loggedIn);

        loggedIn.innerHTML = `
        <div class = "box">
            <h1> Create an Event</h1>
            <button id = 'btn-create'>Click me</button>
        </div>

        <div class = "box">
            <h1> View an Event</h1>
            <button id = 'btn-view'>Click me</button>
        </div>
        `
        const createBtn = loggedIn.querySelector('#btn-create');
        createBtn.addEventListener('click', function(){
            location.href = "createEvent.html";
        });

        const viewBtn = loggedIn.querySelector('#btn-view');
        viewBtn.addEventListener('click', function(){
            location.href = "displayEvent.html";
        });
    }

    function loggedOut(){
        const parentSection = document.createElement("section");
        displayContainer.appendChild(parentSection);
        parentSection.innerHTML = `
        <h1>You are not logged in, please choose either: <h1>
        `

        const notLogged = document.createElement("div");
        parentSection.appendChild(notLogged);

        notLogged.innerHTML = `
        <div class = "box">
            <h1> Signup</h1>
            <button id = 'btn-register'>Click me</button>
        </div>

        <div class = "box">
            <h1> Login</h1>
            <button id = 'btn-login'>Click me</button>
        </div>
        `
        const registerBtn = notLogged.querySelector('#btn-register');
        registerBtn.addEventListener('click', function(){
            location.href = "signup.html";
        });

        const loginBtn = notLogged.querySelector('#btn-login');
        loginBtn.addEventListener('click', function(){
            location.href = "login.html";
        });
    }

});