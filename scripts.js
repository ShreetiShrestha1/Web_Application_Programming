// DOM Elements
const Name = document.getElementById("name");
const roll = document.getElementById("roll");
const address = document.getElementById("address");
const btn_submit = document.getElementById("btn_submit"); 
const btn_output = document.querySelector(".btn_output");
const transcript = document.querySelector("aside"); 
const show_data = document.querySelector(".show_data");

let i = parseInt(localStorage.getItem("counter")) || 0;

// Event Listeners
btn_submit.addEventListener("click", saveUserData);
btn_output.addEventListener("click", displayAllUsers);

function saveUserData(event) {
    event.preventDefault();
// to prevent negative roll numbers
    const rollValue = Number(roll.value);
    if (rollValue < 0) {
        alert("Roll number cannot be negative!");
        return; // This stops the code from saving to localStorage
    }
//for form validation
    if (!Name.checkValidity()) {
        Name.reportValidity();
        return;
    }
    
    if (!roll.checkValidity()) {
        roll.reportValidity();
        return;
    }
    
    if (!address.checkValidity()) {
        address.reportValidity();
        return;
    }

    const user_object = {
        data_name: Name.value,
        data_roll: rollValue,
        data_address: address.value,
    };
  // for storing data in local storage  
    i++;
    localStorage.setItem("counter", i);
    localStorage.setItem(`user${i}`, JSON.stringify(user_object));
    
    UpdateTranscript(user_object);
// to clear the form after submission
    Name.value = "";
    roll.value = "";
    address.value = "";
}
// to display all users stored in local storage
function displayAllUsers() {
    show_data.innerHTML = "";
    const totalUsers = parseInt(localStorage.getItem("counter")) || 0;
    
    for (let j = 1; j <= totalUsers; j++) {
        const user_retrieve = JSON.parse(localStorage.getItem(`user${j}`));
        if (user_retrieve) ShowOutput(user_retrieve, j);
    }
}
// to update the transcript section with the latest user data
function UpdateTranscript(obj) {
    transcript.innerHTML = `
        <h2>Transcript</h2>
        ${description_list(obj)}
    `;
}
// to show each user's data in the output section
function ShowOutput(obj, j) {
    show_data.innerHTML += `
        <div class="border">
            <h2>User ${j}</h2>
            ${description_list(obj)}
        </div>
    `;
}
// to create a description list for user data
function description_list(obj) {
    return `
        <dl class="details">
            <dt>Name:</dt>
            <dd>${obj.data_name}</dd>
            <dt>Roll:</dt>
            <dd>${obj.data_roll}</dd>
            <dt>Address:</dt>
            <dd>${obj.data_address}</dd>
        </dl>
    `;
}
