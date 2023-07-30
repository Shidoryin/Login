    // var loading = document.getElementById('loading');
    // function toggleElementVisibility() {
     
    //     if (loading.style.display === 'none') {
    //         loading.style.display = 'block'; 
    
       
    //         setTimeout(function () {
    //             loading.style.display = 'none';
    //         }, 80000); 
    //     } else {
    //         loading.style.display = 'none';
    //     }
    // }    

    // var loginBtn = document.getElementById('loginBtn');

    // loginBtn.onclick = toggleElementVisibility;







    // var loading = document.getElementById('loading1');
    // function toggleElementVisibility() {
     
    //     if (loading1.style.display === 'none') {
    //         loading1.style.display = 'block'; 
    
       
    //         setTimeout(function () {
    //             loading1.style.display = 'none';
    //         }, 80000); 
    //     } else {
    //         loading1.style.display = 'none';
    //     }
    // }    

    // var loginBtn = document.getElementById('loginBtn');

    // loginBtn.onclick = toggleElementVisibility;




    // var loading = document.getElementById('loading2');
    // function toggleElementVisibility() {
     
    //     if (loading2.style.display === 'none') {
    //         loading2.style.display = 'block'; 
    
       
    //         setTimeout(function () {
    //             loading2.style.display = 'none';
    //         }, 80000); 
    //     } else {
    //         loading2.style.display = 'none';
    //     }
    // }    

    // var loginBtn = document.getElementById('loginBtn');

    // loginBtn.onclick = toggleElementVisibility;











































    var loading1 = document.getElementById('loading1');
    var loading2= document.getElementById('loading2');
    const form = document.getElementById('loginForm');
    const messageElement = document.getElementById('message');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        // Get the input values from the form
        const username = document.getElementsByClassName('username').value;
        const password = document.getElementsByClassName('password').value; // Assuming you have a password input field with id="password"
    
        // Perform login validation (replace this with your actual validation logic)
        if (username === 'your_valid_username' && password === 'your_valid_password') {
            // Login success
            messageElement.textContent = 'Login successful!';
            location.reload(); // Reload the page after successful login
            // loading1.style.display = 'block';
        } else {
            // Login failed
            messageElement.textContent = 'Invalid credentials. Please try again.';
            // loading2.style.display = 'block';
        }
    });
    var loading = document.getElementById('loading');

function toggleElementVisibility() {
    if (loading.style.display === 'none') {
        loading.style.display = 'block';

        setTimeout(function() {
            loading.style.display = 'none';
        }, 2000); // Simulating a 2-second delay, replace with your actual task duration
    } else {
        loading.style.display = 'none';
    }
}

var loginBtn = document.getElementById('loginBtn');
loginBtn.onclick = toggleElementVisibility;


// Mock database with username and password pairs
const mockDatabase = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    // Add more username and password pairs as needed
];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the input values from the form
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Check if the provided username and password match any entry in the mock database
    const validCredentials = mockDatabase.some(entry => entry.username === username && entry.password === password);

    if (validCredentials) {
        // Login success
        messageElement.textContent = 'Login successful!';
            // loading1.style.display = 'block';

        // You can perform any further actions after successful login here
    } else {
        // Login failed
        messageElement.textContent = 'Invalid credentials. Please try again.';
            // loading2.style.display = 'block';

    }
});
