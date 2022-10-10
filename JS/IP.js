
function akanNames() {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame",];
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", " Yaa", "Afua", "Ama",];
  
    var dateInput = prompt("Enter date of birth YYYY-MM-DD");
  
    var birthDates = new Date(dateInput);
    var birthMonth = birthDates.getMonth();
    var birthYear = birthDates.getFullYear();
    var dateYenyewe = birthDates.getDay();
  
    var genderFemale = femaleAkanNames[dateYenyewe];
    var genderMale = maleAkanNames[dateYenyewe];
  
  
  
    if (dateYenyewe >= 0 && dateYenyewe <= 6 && birthMonth <= 11 && birthYear >= 1000 && dateInput.length === 10 ) {
      //logic
      var gender = prompt("Enter your gender M/F: ").toUpperCase(); //changes into upper case
  
      if (gender === "M" || gender === "F" || gender === "MALE" || gender === "FEMALE") {
  
        if (gender === "M") {
  
          document.getElementById("nameDisplay").innerHTML="your Akan name is" + genderMale;
        }
        else {
          document.getElementById("nameDisplay").innerHTML = "your Akan name is" + genderFemale;
        }
      }
      else {
        alert("Invalid gender");
  
      }
    }
  
    else {
      alert("wrong date format please use YYYY-MM-DD\nexample 2022-10-08");
    }
  }