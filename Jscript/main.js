
function generateName(){
  var date = document.getElementById('date').value;
  console.log(date)
  
  var month = document.getElementById('month').value;
 
  var yearOfBirth = document.getElementById('year').value;
  

  var century = yearOfBirth.slice(0,2);
  var year = yearOfBirth.slice(2,4);

  var genders = document.getElementById("gender");
  var gender = genders.options[genders.selectedIndex].text;

  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

  var dayOfBirth = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
  var dayOfBirth = Math.floor(dayOfBirth);

  if (gender === "Male") {
       document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  maleName[dayOfBirth -1];
       }
       else if (gender === "Female") {
           document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  femaleName[dayOfBirth -1];
       }
    
}
 */


/*form validation9*/


function generateName(){
  var date = document.getElementById('date').value;
  console.log(date)
  
  var month = document.getElementById('month').value;
 
  var yearOfBirth = document.getElementById('year').value;
  

  var century = yearOfBirth.slice(0,2);
  var year = yearOfBirth.slice(2,4);

  var genders = document.getElementById("gender");
  var gender = genders.options[genders.selectedIndex].text;

  var maleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleName = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amna"];
  var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

  var dayOfBirth = ( ( (century/4) -2*year-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
  var dayOfBirth = Math.floor(dayOfBirth);

  if (gender === "Male") {
       document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  maleName[dayOfBirth -1];
       }
       else if (gender === "Female") {
           document.getElementById("result").innerHTML = "You were born on " + dayOfWeek[dayOfBirth - 1]+ " and your name is " +  femaleName[dayOfBirth -1];
       }
    
}



/* checking */    
/*
var thisForm = document.getElementById("form");
akanForm.addEventListener("submit", (e) => {
    e.preventDefault();   */

    gender = document.getElementById("gender").value
    dateOfBirth = document.getElementById("date").value

    dateOfBirth = new Date(dateOfBirth);

    let yearOfBirth = dateOfBirth.getFullYear();
    let birthMonth = dateOfBirth.getMonth() + 1;
    let dayOfBirth = dateOfBirth.getDate();

    CC = yearOfBirth.toString().substr(0, 2);
    YY = yearOfBirth.toString().substr(2, 2);
    MM = birthMonth
    DD = dayOfBirth

    dayOfWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    dayOfWeek = parseInt(dayOfWeek);

    let akanName;

    femaleAkanNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];
    maleAkanNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];

    let bornDay;

    if (dayOfTheWeek == 0 && gender == "female") {
        bornDay = "Saturday";
        akanName = femaleAkanNames[0];
    } else if (dayOfTheWeek == 0 && gender == "male") {
        bornDay = "Saturday";
        akanName = maleAkanNames[0];


    } else if (dayOfTheWeek == 1 && gender == "female") {
        bornDay = "Sunday";
        akanName = femaleAkanNames[1];
    } else if (dayOfTheWeek == 1 && gender == "male") {
        bornDay = "Sunday";
        akanName = maleAkanNames[1];


    } else if (dayOfTheWeek == 2 && gender == "female") {
        bornDay = "Monday";
        akanName = femaleAkanNames[2];
    } else if (dayOfTheWeek == 2 && gender == "male") {
        bornDay = "Monday";
        akanName = maleAkanNames[2];


    } else if (dayOfTheWeek == 3 && gender == "female") {
        bornDay = "Tuesday";
        akanName = femaleAkanNames[3];
    } else if (dayOfTheWeek == 3 && gender == "male") {
        bornDay = "Tuesday";
        akanName = maleAkanNames[3];


    } else if (dayOfTheWeek == 4 && gender == "female") {
        bornDay = "Wednesday";
        akanName = femaleAkanNames[4];
    } else if (dayOfTheWeek == 4 && gender == "male") {
        bornDay = "Wednesday";
        akanName = maleAkanNames[4];


    } else if (dayOfTheWeek == 5 && gender == "female") {
        bornDay = "Thursday";
        akanName = femaleAkanNames[5];
    } else if (dayOfTheWeek == 5 && gender == "male") {
        bornDay = "Thursday";
        akanName = maleAkanNames[5];


    } else if (dayOfTheWeek == 6 && gender == "female") {
        bornDay = "Friday";
        akanName = femaleAkanNames[6];
    } else if (dayOfTheWeek == 6 && gender == "male") {
        bornDay = "Friday";
        akanName = maleAkanNames[6];
    }

    let result = document.getElementById("reveal-result").innerHTML = "You were born on a " + bornDay + " so your akan name is " + akanName + "!"
    document.getElementById("akanForm").reset();
});


















