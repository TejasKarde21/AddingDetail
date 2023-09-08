const mainContainer = document.getElementById("mainContainer");
const frame = document.getElementById("frame");
function UserDetail(){
    const Fname = prompt("Enter The First Name");
    const Lname=prompt("Enter The Last Name");
    const contry=prompt("Enter The Country");
    const pNum=prompt("Enter The Phone Number");
    const State=prompt("Enter The State");
    const City=prompt("Enter The City");
    const Village=prompt("Enter The Village");


  

    localStorage.setItem("name",Fname);
    localStorage.setItem("lname",Lname);
    localStorage.setItem("contry",contry);
    localStorage.setItem("pNum",pNum);
    localStorage.setItem("State",State);
    localStorage.setItem("City",City);
    localStorage.setItem("Village",Village);

   



     

     frame.innerHTML=
     `
            <h1>User Information Card</h1>
            <div id="InnerDIv">
                <div class="spa"><span class="fi">First Name:</span><span id="name">Tejas</span></div>
                <div class="spa"><span class="fi">Last Name:</span><span id="lname">Karde</span></div>
                <div class="spa"><span class="fi">Country:</span><span id="coun">India</span></div>
                <div class="spa"><span class="fi">Phone Number:</span><span id="pn">7083093390</span></div>
                <div class="spa"><span class="fi">State:</span><span id="sta">Maharashtra</span></div>
                <div class="spa"><span class="fi">City:</span><span id="city">Wardha</span></div>
                <div class="spa"><span class="fi">Village:</span><span id="vill">Wardha</span></div>
            </div>
       
`;

const  name  =document.getElementById("name");
const  lname =document.getElementById("lname");
const  coun =document.getElementById("coun");
const  pn =document.getElementById("pn");
const  sta =document.getElementById("sta");
const  city =document.getElementById("city");
const  vill =document.getElementById("vill");

name.innerText = localStorage.getItem("name");
lname.innerText = localStorage.getItem("lname");
coun.innerText = localStorage.getItem("contry");
pn.innerText = localStorage.getItem("pNum");
sta.innerText = localStorage.getItem("State");
city.innerText = localStorage.getItem("City");
vill.innerText = localStorage.getItem("Village");




mainContainer.appendChild(frame);



}


UserDetail();


document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');

    darkModeToggle.addEventListener('change', function() {
        document.body.classList.toggle('dark-mode');
    });
});
