  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA8TUtaoB3g9mwxKJPCjfcprOMzHcJxSyU",
    authDomain: "dairy-business.firebaseapp.com",
    projectId: "dairy-business",
    storageBucket: "dairy-business.appspot.com",
    messagingSenderId: "217143874734",
    appId: "1:217143874734:web:838ac3435e72a73ed0893f",
    measurementId: "G-XN9H4HQV1Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const auth = firebase.auth();



// const signupForm = document.querySelector('#signup-form');
// signupForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     //get user info
//     const username =signupForm['signup-username'].value;
//     const email =signupForm['signup-email'].value;
//     const password =signupForm['signup-password'].value;
//     const confirmPass  =signupForm['signup-confirmPass'].value;

//     console.log(username, email, password);


// })

function signUp() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPass = document.getElementById("confirmPass");

    if (document.getElementById("confirmPass").value == document.getElementById("password").value) {

        const promise = firebase.auth().createUserWithEmailAndPassword(username.value, email.value, password.value);
        promise.catch(e => alert(e.message));
        alert("Congratulations! User registered");
    }
    else {
        alert("Password doesn't match!");
    }

}



function login() {
    var userEmail = document.getElementById("email").value;
    var UserPass= document.getElementById("password").value;

    window.alert(userEmail);

}



// function signUp() {
//     if (document.getElementById("confirmPass").value == document.getElementById("password").value) {
//         var users = new Object();
//         users.username = document.getElementById("username").value;
//         users.email = document.getElementById("email").value;
//         users.confirmPass = document.getElementById("confirmPass").value;


//         const promise = auth.createUserWithEmailAndPassword(users.username, users)



//         // var postUser = new XMLHttpRequest(); // new HttpRequest instance to send user details

//         // postUser.open("POST", "/users", true); //Use the HTTP POST method to send data to server

//         // postUser.setRequestHeader("Content-Type", "application/json");

//         // // Convert the data in "users" object to JSON format before sending to the server.
//         // postUser.send(JSON.stringify(users));
//     }
//     else {
//         alert("Password doesn't match!")
//     }
// }



// var attempt = 3; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function login(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;
//     if ( username == "Formget" && password == "formget#123"){
//         alert ("Login successfully");
//         window.location = "dashboard.html"; // Redirecting to other page.
//         return false;
//         }
//     else{
//         attempt --;// Decrementing by one.
//         alert("You have left "+attempt+" attempt;");
//     // Disabling fields after 3 attempts.
//     if( attempt == 0){
//         document.getElementById("email").disabled = true;
//         document.getElementById("password").disabled = true;
//         document.getElementById("submit").disabled = true;
//         return false;
//         }
//     }
// }




function writeProductionData (){
    firebase.database().ref("User").set({
        date: document.getElementById("date").value,
        shedA: document.getElementById("shedA").value,
        shedB: document.getElementById("shedB").value,
        shedC: document.getElementById("shedC").value,
        shedD: document.getElementById("shedD").value,


    });
}









function todayDate (){
    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

}

function totalProduction (A, B, C, D){

    Total = A + B + C + D;

    console.log("Your production in Shed A " + A + " litres per day ");
    console.log("Your production in Shed B " + B + " litres per day ");
    console.log("Your production in Shed C " + C + " litres per day ");
    console.log("Your production in Shed D " + D + " litres per day ");
    console.log("The total production is " + Total + " litres per day");

}


totalProduction(510, 308, 486, 572);




function incomeOverTime(selling_price, time){
    // selling_price = 84420;

    January_income = selling_price * 31; 
    February_income = selling_price * 29; 
    March_income = selling_price * 31; 
    April_income = selling_price * 30; 
    May_income = selling_price * 31; 
    June_income = selling_price * 30; 
    July_income = selling_price * 31; 
    August_income = selling_price * 31; 
    September_income = selling_price * 30; 
    October_income = selling_price * 31; 
    November_income = selling_price * 30; 
    December_income = selling_price * 31; 

    if (time=='monthly'){

        console.log("Your income for January is " + January_income);
        console.log("Your income for February is " + February_income);
        console.log("Your income for March is " + March_income);
        console.log("Your income for April is " + April_income);
        console.log("Your income for May is " + May_income);
        console.log("Your income for June is " + June_income);
        console.log("Your income for July is " + July_income);
        console.log("Your income for August is " + August_income);
        console.log("Your income for September is " + September_income);
        console.log("Your income for October is " + October_income);
        console.log("Your income for November is " + November_income);
        console.log("Your income for December is " + December_income);


        }

    else if (time == 'yearly'){
            total_income = (January_income + February_income + March_income + April_income + May_income + June_income + July_income + August_income + September_income + October_income + November_income + December_income);
            console.log("Your yearly income is " + total_income);
        }

}

incomeOverTime(84420, 'monthly');




    
// let button = document.getElementById("productButton");

// button.addEventListener("click", function () {

//     //Get the values which the user types

//     let shedA = document.getElementById("shedA").value;

//     let shedB = document.getElementById("shedB").value;

//     let shedC = document.getElementById("shedC").value;

//     let shedD = document.getElementById("shedD").value;

//     //create database objects

//     var data = {
//         shedA = shedA,
//         shedB = shedB,
//         shedC = shedC,
//         shedD = shedD
//     }

//     //Save the data to the firebase

//     var database = firebase.database();  //gets the database

//     var ref = database.ref("records");

//     //push the objects

//     ref.push(data); 


// });

// // Listen for form submit
// // document.getElementById(productionForm).addEventListener('submit', submitForm);


// // function submitForm(e){
// //     e.preventDefault();

// //     //Get values
// //     var shedA = getInputVal('shedA');

// //     var shedB = getInputVal('shedB');

// //     var shedC = getInputVal('shedC');

// //     var shedD = getInputVal('shedD');


// //     console.log(shedA, shedB);



// // }


// // // Function to get form values

// // function getInputVal(id){   
// //     return document.getElementById(id).nodeValue;
// // }