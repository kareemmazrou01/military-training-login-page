// Variables to store user data
let userData = {
    username: '',
    email: '',
    phone: '',
    password: ''
};

// Get the signup and login buttons
const signupBtn = document.getElementById('signup-btn');
const loginBtn = document.getElementById('login-btn');

// Get signup form inputs
const signupUsername = document.getElementById('signup-username');
const signupEmail = document.getElementById('signup-email');
const signupPhone = document.getElementById('signup-phone');
const signupPassword = document.getElementById('signup-password');

// Get login form inputs
const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

// Handle signup button click
signupBtn.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission

    // Save the data to the userData object
    userData.username = signupUsername.value;
    userData.email = signupEmail.value;
    userData.phone = signupPhone.value;
    userData.password = signupPassword.value;

    // Display success message
    alert("Signed up successfully!");

    // Automatically switch to login after signup
    document.getElementById('chk').checked = true;
});

// Handle login button click
loginBtn.addEventListener('click', function(event) {
    if (loginEmail.value === userData.email && loginPassword.value === userData.password) {
        // Successful login, redirect to the new page
        event.preventDefault();
        displayDataPage();
    } else {
        event.preventDefault(); // Prevent form submission
        alert("You may wrote wrong values, or you forgot to sign up first");
    }
});

function displayDataPage() {
    // Create a new page content
    document.body.innerHTML = `
    <div class="main">
        <div class="table-container">
            <table id="data-table">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${userData.username}</td>
                        <td>${userData.email}</td>
                        <td>${userData.phone}</td>
                        <td>${userData.password}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button id="add-row-btn">Add New Row</button>
        <button id="delete-btn">Delete All Data</button>
    </div>
    `;

    // Apply the same design as the login/signup page
    document.querySelector('.main').style.cssText = `
        width: 350px;
        background: red;
        background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
        border-radius: 10px;
        box-shadow: 5px 20px 50px #000;
        padding: 20px;
    `;
    
    document.querySelector('.table-container').style.cssText = `
        overflow-x: auto; /* Enables horizontal scrolling */
        width: 100%; /* Ensures the container takes up the full width */
        margin-bottom: 20px;
    `;

    document.querySelector('table').style.cssText = `
        width: 100%;
        min-width: 500px; /* Sets a minimum width to make the table wider than its container */
        margin-bottom: 20px;
        border-collapse: collapse;
        text-align: left;
        color: #ffffff;
    `;
    document.querySelector('th, td').style.cssText = `
        padding: 12px;
        border-bottom: 1px solid #ddd;
    `;
    document.querySelector('#add-row-btn').style.cssText = `
        width: 100%;
        padding: 10px;
        color: #fff;
        background: #573b8a;
        font-size: 1em;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        transition: .2s ease-in;
        margin-bottom: 10px;
    `;
    document.querySelector('#delete-btn').style.cssText = `
        width: 100%;
        padding: 10px;
        color: #fff;
        background: #ff4d4d;
        font-size: 1em;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        transition: .2s ease-in;
    `;

    // Add event listener to the "Add New Row" button
    document.getElementById('add-row-btn').addEventListener('click', function() {
        const newUsername = prompt("Enter a new username:");
        const newEmail = prompt("Enter a new email:");
        const newPhone = prompt("Enter a new phone number:");
        const newPassword = prompt("Enter a new password:");

        if (newUsername && newEmail && newPhone && newPassword) {
            const tableBody = document.querySelector('#data-table tbody');
            const newRow = document.createElement('tr');

            newRow.innerHTML = `
                <td>${newUsername}</td>
                <td>${newEmail}</td>
                <td>${newPhone}</td>
                <td>${newPassword}</td>
            `;
            tableBody.appendChild(newRow);
        } else {
            alert("All fields must be filled out to add a new row.");
        }
    });

    // Add event listener to the "Delete All Data" button
    document.getElementById('delete-btn').addEventListener('click', function() {
        const tableBody = document.querySelector('#data-table tbody');
        tableBody.innerHTML = ""; // Clear all rows in the table
    });
}
