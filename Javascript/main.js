function signUp(e) {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var confirmPass = document.getElementById("confirmPass");

    if (document.getElementById("confirmPass").value == document.getElementById("password").value) {

        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);

        //alert("User registered");
        e.preventDefault();

    }

    else {
         alert("Password doesn't match!");


    }
    

   };


   function login() {

    // stored
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");

    //user entered values

    var userEmail = document.getElementById('userEmail');
    var userPassword = document.getElementById('userPassword');

   
    if (userEmail.value == storedEmail && userPassword.value == storedPassword){

      // document.getElementByID('welcomeMessage').innerHTML = "Welcome " + username + "!";
      window.location="dashboard.html";

       } else {

        alert("Wrong login details combinations!!");

        }

   };




function displayData(){

    var shedA = document.getElementById("shedA").value; 
    var shedB = document.getElementById("shedB").value; 
    var shedC = document.getElementById("shedC").value; 
    var shedD = document.getElementById("shedD").value; 
    
    var total = parseFloat(shedA) + parseFloat(shedB)+parseFloat(shedC)+parseFloat(shedD);
    var sellingPrice = document.getElementById("sp").value; 
    var dIncome = parseFloat(sellingPrice) * parseFloat(total);
    var wIncome = parseFloat(dIncome) * parseFloat(7);
    var yIncome = parseFloat(dIncome) * parseFloat(366);



    


       
    var  table = document.getElementById("productionData");
    
    var row =1;


    var newRow = table.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);
    var cell9 = newRow.insertCell(8);





    cell1.innerHTML = shedA;
    cell2.innerHTML = shedB;
    cell3.innerHTML = shedC;
    cell4.innerHTML = shedD;
    cell5.innerHTML = total;
    cell6.innerHTML = sellingPrice;
    cell7.innerHTML = dIncome;
    cell8.innerHTML = wIncome;
    cell9.innerHTML = yIncome;





    row++;

    document.getElementById("A").innerHTML = "Your production in Shed A "  + shedA + " litres per day";

    document.getElementById("B").innerHTML = "Your production in Shed B "  + shedB + " litres per day";

    document.getElementById("C").innerHTML = "Your production in Shed C "  + shedC + " litres per day";

    document.getElementById("D").innerHTML = "Your production in Shed D "  + shedD + " litres per day";

    document.getElementById("total").innerHTML = "Your total  production  "  + total + " litres per day";

    document.getElementById("productionForm").reset();


    var January_income = parseFloat(dIncome) * parseFloat(31); 
    var February_income =  parseFloat(dIncome) * parseFloat(29); 
    var March_income =  parseFloat(dIncome) * parseFloat(31); 
    var April_income =  parseFloat(dIncome) * parseFloat(30); 
    var May_income =  parseFloat(dIncome) * parseFloat(31); 
    var June_income =  parseFloat(dIncome) * parseFloat(30); 
    var July_income =  parseFloat(dIncome) * parseFloat(31); 
    var August_income =  parseFloat(dIncome) * parseFloat(31); 
    var September_income =  parseFloat(dIncome) * parseFloat(30); 
    var October_income = parseFloat(dIncome) * parseFloat(31); 
    var November_income =  parseFloat(dIncome) * parseFloat(30); 
    var December_income =  parseFloat(dIncome) * parseFloat(31); 

    document.getElementById("jan").innerHTML = "Your income for January is "  + January_income + " litres per day";
    document.getElementById("feb").innerHTML = "Your income for February is "  + February_income + " litres per day";
    document.getElementById("march").innerHTML = "Your income for March is "  + March_income + " litres per day";
    document.getElementById("april").innerHTML = "Your income for April is "  + April_income + " litres per day";
    document.getElementById("may").innerHTML = "Your income for May is "  + May_income + " litres per day";
    document.getElementById("june").innerHTML = "Your income for June is "  + June_income + " litres per day";
    document.getElementById("july").innerHTML = "Your income for July is "  + July_income + " litres per day";
    document.getElementById("aug").innerHTML = "Your income for August is "  + August_income + " litres per day";
    document.getElementById("sept").innerHTML = "Your income for September is "  + September_income + " litres per day";
    document.getElementById("oct").innerHTML = "Your income for October is "  + October_income + " litres per day";
    document.getElementById("nov").innerHTML = "Your income for November is "  + November_income+ " litres per day";
    document.getElementById("dec").innerHTML = "Your income for December is "  + December_income+ " litres per day";


    return false;

    


}





function productionDisplay(){
    var shedA = document.getElementById("shedA").value; 
    var shedB = document.getElementById("shedB").value; 
    var shedC = document.getElementById("shedC").value; 
    var shedD = document.getElementById("shedD").value; 

    alert(" Your production in Shed A 510 litres per day \n Your production in Shed B 308 litres per day \n Your production in Shed C 486 litres per day \n Your production in Shed D 572 litres per day \n The total production is 1876 litres per day");


}


function incomeReport(){
    
    //var total = document.getElementById("total").value;

    alert("Your daily income is ksh 84420 \n Your weekly income will be Ksh 590940 \n Your yearly income will be Ksh 30813300");


}

function monthlyReport(){
    alert("Your income for January is 2617020 \n Your income for February is 2448180 \n Your income for March is 2617020 \n Your income for April is 2532600 \nYour income for May is 2617020 \n Your income for June is 2532600 \n Your income for July is 2617020 \n Your income for August is 2617020 \n Your income for September is 2532600 \n Your income for October is 2617020 \n Your income for November is 2532600 \n Your income for December is 2617020");
}




// const totalProduction = e =>{
//     let formData = {
//         shedA: document.getElementById("shedA").value,
//         shedB: document.getElementById("shedB").value,
//         shedC: document.getElementById("shedC").value,
//         shedD: document.getElementById("shedD").value,

//     }

//      //total = shedA + shedB + shedC + shedD;


//     localStorage.setItem("formData", JSON.stringify(formData));
//     e.preventDefault();

//     //displayData();
//     console.log(localStorage.getItem("formData"));


// }


// function displayData(){
//     if(localStorage.getItem('formData')){
//     let {shedA, shedB, shedC, shedD} =  JSON.parse(localStorage.getItem("formData"));
//    // total = shedA + shedB + shedC + shedD;
//     var output = document.getElementById("output");
//             output.innerHTML = `
//             <table>
//                 <tbody>
//                     <tr>
//                         <td>Shed A</td>
//                         <td>${shedA}</td>
//                     </tr>
//                     <tr>
//                         <td>Shed B</td>
//                         <td>${shedB}</td>
//                     </tr>
//                     <tr>
//                         <td>Shed C</td>
//                         <td>${shedC}</td>
//                     </tr>
//                     <tr>
//                         <td>Shed D</td>
//                         <td>${shedD}</td>
//                     </tr>
//                     tr>
//                         <td>Total</td>
//                         <td>${total}</td>
//                     </tr>
//                 </tbody>
//             </table>`;   

//     }
// }

// displayData();





    


// function totalProduction (event){
//     var shedA = document.getElementById("shedA").value;
//     var shedB = document.getElementById("shedB").value;
//     var shedC = document.getElementById("shedC").value;
//     var shedD = document.getElementById("shedD").value;

    
//     total = shedA + shedB + shedC + shedD;

//     //return total;
//     console.log("sum is: " + total);

// }


// var totalDailyProduction = totalProduction();

// document.getElementById("A").innerHTML = shedA + " litres per day";

// document.getElementById("B").innerHTML = shedB + " litres per day";

// document.getElementById("C").innerHTML = shedC + " litres per day";

// document.getElementById("D").innerHTML = shedD + " litres per day";

// document.getElementById("total").innerHTML = totalDailyProduction + " litres per day";