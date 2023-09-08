# AddingDetail

const mainContainer = document.getElementById("mainContainer");
This line gets the DOM element with the id "mainContainer" and assigns it to 
the variable mainContainer. This element likely corresponds to a container in your HTML.
const frame = document.getElementById("frame");
Similarly, this line gets the DOM element with the id "frame" and assigns it
to the variable frame. This element is likely a frame or container for displaying user information.
function UserDetail(){ ... }
This is a function named UserDetail which appears to be responsible for collecting user input,
storing it in local storage, and updating the UI with the provided information.

Inside UserDetail:
The function prompts the user to enter various pieces of information such as first name, last name, country, etc.
Each piece of information is stored in local storage using localStorage.setItem("key", "value"). For example, 
localStorage.setItem("name", Fname) stores the value of Fname (First Name) with the key "name" in local storage.
The next part updates the HTML content inside the frame element with user information.
It uses template literals (backticks ``) for creating a multi-line string with placeholders.
Inside this string, you have placeholders like <span id="name">Tejas</span> which suggests that 
there are elements in the HTML with IDs like "name", "lname", etc. These will be used to display the user's information.

After updating the HTML content, the function retrieves the elements with these IDs 
(e.g., const name = document.getElementById("name")) and sets their innerText to the corresponding values from local storage.

Finally, the frame element (with updated content) is appended to the mainContainer element.

document.addEventListener('DOMContentLoaded', function() { ... });

This event listener waits for the DOM content to be fully loaded before executing the provided function. 
It's used to ensure that the JavaScript doesn't run until the HTML has been completely parsed and is ready to be interacted with.
const darkModeToggle = document.getElementById('darkModeToggle');

This line gets the DOM element with the id "darkModeToggle" and assigns it to the
variable darkModeToggle. This element is likely a checkbox or toggle switch used for enabling or disabling dark mode.
darkModeToggle.addEventListener('change', function() { ... });

This adds an event listener to the darkModeToggle element. It listens for a change
in the element's state (e.g., when a checkbox is checked or unchecked).
Inside the event listener:

document.body.classList.toggle('dark-mode'); toggles the class "dark-mode" on the body element. 
This is a common technique used to switch between dark and light mode styles.
