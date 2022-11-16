//1.When to use "continue"?
//2.set-->How to delete duplicate error message?
//3.When we create list, why use 'document', instead of 'form'?
//4.duplicate error messages occur when click validate button again.


for (const form of document.getElementsByTagName('form')){
  form.addEventListener('submit', function(event){
    //form.parentNode.querySelector('.errors').innerHTML = "";
    const errorArray = [];
    const inputs = form.getElementsByTagName('input');
    for (const input of inputs){    
      if (input.classList.contains('required') && input.value.trim().length === 0) {
         // if (input.classList.contains('required') && input.value ===""){}
        errorArray.push("Required fields must have a value that is not empty or whitespace.");
        continue;
      }
      if (input.classList.contains('alphabetic') && !/^[a-z]+$/i.test(input.value)){
        errorArray.push("Alphabetic fields must be a series of alphabetic characters.")
      }
      if (input.classList.contains('numeric') && !/^[0-9]+$/.test(input.value)){
        errorArray.push("Numeric fields must be a series of numbers."); 
      }
      if (input.classList.contains('required_size') && input.value.trim().length < input.minLength){
        errorArray.push("Required_size field lengths must exactly match the minlength attribute of that field.");
        continue;
      }
      if (input.classList.contains('username') && input.value.trim().length < 8){
        errorArray.push("Username fields must contain at least 8 characters.");
        continue
      }
      if (input.classList.contains('username') && !/^[0-9a-z]+$/i.test(input.value)){
        errorArray.push("Username fields must contain only alphanumeric characters.");
      }
      if (input. classList.contains('date') && !/\d{2}\/\d{2}\/\d{4}/.test(input.value.trim())){
        errorArray.push( "Date fields must match the format of XX/XX/XXXX.");
      }
      if (input.classList.contains('phone') && !/\d{3}\/\d{3}\/\d{4}/.test(input.value.trim())){
        errorArray.push("Phone fields must match the format of XXX-XXX-XXXX.")
      }
      if (input.classList.contains('password') && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/.test(input.value)){
        errorArray.push("Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.");
      }
      }
    if (errorArray.length > 0){
      event.preventDefault();
      let errorLists = document.createElement('ul');
      errorLists.style = "color:red";
      for (const error of errorArray){
        const errorList = document.createElement('li');
        const errorText = document.createTextNode(error);     
        errorList.appendChild(errorText);
        errorLists.appendChild(errorList);
        }
        form.parentNode.querySelector('.errors').appendChild(errorLists);
        //form.parentNode.querySelector('.errors').innerText = errorArray.join(',');
    }
 })
}






// const forms = document.getElementsByTagName('form');
// for (const form of forms){

// const validate = (event) =>{
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
//         console.log(errorArray);
//       }
//   }
// }

// document.querySelectorAll("form").addEventListener("submit", validate);

  
// }


