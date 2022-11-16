// const inputFirstName = document.querySelector('#firstname');
// const inputLastName = document.querySelector('#lastname');
// const inputUserName = document.querySelector('#username');
// const inputPassword = document.querySelector('#pastword');
// const inputZip = document.querySelector('#zip');
// const inputId = document.querySelector('#id');
// const errorElement = document.querySelector('.errors');

// const requiredElements = document.querySelectorAll('.required');
// for (let requiredElement of requiredElements){
//   if (requiredElement.value.trim() == ""){
//       //errorArray.push("Required fields must have a value that is not empty or whitespace.");
//       //break;   
//   } 
// }

const forms = document.getElementsByTagName('form');
for (const form of forms){
  form.addEventListener('submit', function(event){
    const errorArray = [];
    const inputs = form.getElementsByTagName('input');
    for (const input of inputs){
      if (input.calssList.contains('required') && input.value ===""){
        errorArray.push("Required fields must have a value that is not empty or whitespace.";
      }
      if (input.calssList.contains('alphabetic') && !/^[a-z]+$/i.test(input.value)){
        errorArray.push("Alphabetic fields must be a series of alphabetic characters.")
      }
      if (input.classList.contains('numeric') && !/^[0-9]+$/.test(input.value)){
        errorArray.push("Numeric fields must be a series of numbers."); 
      }
      if (input.classList.contains('required_size') && input.value.length < input.minLength){
        errorArray.push("Required_size field lengths must exactly match the minlength attribute of that field.");
      }
      if (input. classList.contains('username') && )
      }
    if (error.length > 0){
      event.preventDefault();
      form.parentNode.querySelector(error).innerText = errors.join(',');
    }
 })
}


// const checkValidate = (event) =>{
//   event.preventDefault();
//   let errorArray = [];
//   let inputs = document.querySelectorAll('input');
//   for (const input of inputs){
//       if (input.classList.contains('required') && input.value.trim().length === 0) {
//          errorArray.push("Required fields must have a value that is not empty or whitespace.");//for required //repititipn
//       }

//       if (input.classList.contains('numeric') && !/^[0-9]+$/.test(input.value)){
//          errorArray.push("Numeric fields must be a series of numbers."); //for numeric
//       }

//       if (input.classList.contains('alphabetic') && !/^[a-z]+$/i.test(input.value)) {
//            errorMessages.push("Alphabetic fields must be a series of alphabetic characters.");
//       }

//       if (input.classList.contains('"required_size') && input.value.trim().length<5){
//         errorArray.push("Required_size field lengths must exactly match the minlength attribute of that field.");//for required-size
//       }

//       if (input.classList.contains('required') && !/^[0-9]+$/.test(input.value)){
//         errorArray.push("Numeric fields must be a series of numbers.");
//   console.log(errorArray);
//       }
//   }
// }

// document.querySelectorAll("form").addEventListener("submit", checkValidate);



// if (inputFirstName.value.trim() == ""){
//   errorArray.push("Required fields must have a value that is not empty or whitespace.");
// }
     
// if (inputLastName.value.trim() == ""){
//   errorArray.push("Required fields must have a value that is not empty or whitespace.");
// }

// if (inputUserName.value.trim() == ""){
//   errorArray.push("Required fields must have a value that is not empty or whitespace.");
// }
 
//  if (errorArray.length >0){
//   event.preventDefault();
//     errorElement.innerText = errorArray.join(',');

//  }
//}


