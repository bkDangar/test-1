// 1 - arrayy = [bharat, yash, ravi, bhargav]

// let names = ["bharat", "yash", "ravi", "bhargav"];
// let nameToFind = prompt("enter a name")

// if (names.includes(nameToFind)) {
//     document.write(nameToFind);
// } else {
//    document.write(nameToFind+ " is not in the array.");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2 - test = ["bhargav", "ravi", "bharat", "yash"]
// test = bhargav, ravi, bharat, yash


// let arr =  ["bhargav", "ravi", "bharat", "yash"]
// console.log(arr.toString())


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 3 - a function where when you clicked on a button then it should add 15 rupees to the total balance, total balance is 53 rupees, on first click you have to increase the value by 15 rupees, on second also add 15 rupees, but if user click button 3 times then make the total balance zero


// let balance = 53;
//     let clickCount = 0;

//     function incrementBalance() {
//         clickCount++;
//         if (clickCount === 3) {
//             balance = 0;
//             clickCount = 0;
//         } else {
//             balance += 15;
//         }
//         document.getElementById('balance').innerText = balance;
//     }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1- you have 1 students in your class, if student have 43% average in all subjects then perform a function that student information should store in a json value, now parse the json and show in the console 




// let student = {
//     name: "bhargav",
//     average: 43
// };


// let studentjson = JSON.stringify(student)
// document.write(studentjson)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 2- print  ******** in the console
//            ******
//             ****
//              **
//              *   





// let line = 8;
// for(let i=0; i<line; i++){
//     let spaces = " ".repeat(i)
//     let star = " *".repeat(line-i)
//     console.log(spaces + star)
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// 3 - make a function where when a user add some data from input for Signup then it should store the data in the local Storage, make a validation input and password field and iterate the data, user should login with the given id password which he stored in the local storage

// function Signup(event){

//     const username = document.getElementById('username').value
//     const password = document.getElementById('password').value

//     if(localStorage.getItem(username)){
//       return  alert("user alredy exist please enter a difrent username")
//     }
//     localStorage.setItem(username,JSON.stringify({username,password}))
//     alert('Signup successful! Please proceed to login.');
// }

// // loginform

// function login(event){ 

//     const loginUsername = document.getElementById('loginUsername').value
//     const loginPassword = document.getElementById('loginPassword').value

//     const userData = JSON.parse(localStorage.getItem(loginUsername))

//     if(userData && userData.password === loginPassword){
//         return alert("login succesfully")
//     }else{
//         alert("invelid username and password please try again")
//     }
// }

// document.getElementById('signupForm').addEventListener('submit',Signup)
// document.getElementById('loginForm').addEventListener('submit',login)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 4 - make a calculator




// const display = document.getElementById('display');

// function appendToDisplay(char) {
//     display.value += char;
// }

// function calculate() {
//     try {
//         display.value = eval(display.value);
//     }
//     catch {
//         display.value = 'Error';
//     }
// }





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // 5- make a dice with 1-6 possible value, if user get 6 then show a prompt where user enter the name and mobile Number, this data of the users should store in local Storage, show the data in a table




function rollDice() {

    const diceValue = Math.floor(Math.random() * 6) + 1;

    if (diceValue === 6) {
    
        const name = prompt('You rolled a 6! Enter your name:');
        const mobileNumber = prompt('Enter your mobile number:');
    
        if (!name || !mobileNumber) {
            alert('Name and mobile number are required.');
            return;
        }
        const userData = { name, mobileNumber };
        localStorage.setItem('userData', JSON.stringify(userData));
    
        displayUserData(userData);
    }

}
function displayUserData(userData) {
    const tableBody = document.querySelector('#userData tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${userData.name}</td>
        <td>${userData.mobileNumber}</td>
    `;
    tableBody.appendChild(row);
}


