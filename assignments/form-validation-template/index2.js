/**
 * returns true if text is alphabetic
 * @param {string} input 
 * @returns {boolean}
 */

 const isValidAlphabetic = (input) =>{
    const regex = /^[a-z]+$/i;
    return regex.test(input.value);
  }
  
  /**
   * returns true if text is numeric 
   * @param {string} input 
   * @returns {boolean}
   */
  
  const isValidNumeric = (input) =>{
    const regex = /^[0-9]+$/;
    return regex.test(input.value);
  }
  
  /**
   * returns true if the input value length matches the input minLength 
   * @param {HTML Element} input 
   * @returns {boolean}
   */
  
  const isValidRequiredSize = (input) => {
    return input.value.trim().length === input.minLength;
  }
  
  /**
   * returns true if text is alphanumeric
   * @param {String} input 
   * @returns {boolean}
   */
  
  const isValidUsernameAlphanumeric = (input) => {
    const regex = /^[0-9a-z]+$/i;
    return regex.test(input.value);
  }
  
  /**
   * returns true if text meets date requirements
   * @param {string} input 
   * @returns {boolean}
   */
  
  const isValidDate = (input) => {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    return regex.test(input.value.trim());
  }
  
  /**
   * returns true if text meet phone requirements
   * @param {string} input 
   * @returns {boolean}
   */
  
  const isValidPhone = (input) => {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    return regex.test(input.value.trim());
  }
  
  /**
   * returns true if text meets password requirements
   * @param {string} input 
   * @returns {boolean}
   */
  
  const isValidPassword = (input) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
    return regex.test(input.value);
  }
  
  /**
   * clear any previous error messages, check all inputs within form for errors and display them
   * @Param {object[]} event
   */
  
  const validateForm =(event) => {
    event.target.parentNode.querySelector('.errors').innerText = "";
    const errorArray = [];
    const inputs = event.target.getElementsByTagName('input');
    for (const input of inputs){    
        if (!input.classList.contains('required') && input.value.trim().length === 0){
          continue;
        } 
        if (input.classList.contains('required') && input.value.trim().length === 0) {
          errorArray.push("Required fields must have a value that is not empty or whitespace.");
          continue;
        }
        if (input.classList.contains('alphabetic') && !isValidAlphabetic(input)){
          errorArray.push("Alphabetic fields must be a series of alphabetic characters.")
        }
        if (input.classList.contains('numeric') && !isValidNumeric(input)){
          errorArray.push("Numeric fields must be a series of numbers."); 
        }
        if (input.classList.contains('required_size') && !isValidRequiredSize(input)){
          errorArray.push("Required_size field lengths must exactly match the minlength attribute of that field.");
          continue;
        }
        if (input.classList.contains('username') && input.value.trim().length < 8){
          errorArray.push("Username fields must contain at least 8 characters.");
          continue;
        }
        if (input.classList.contains('username') && !isValidUsernameAlphanumeric(input)){
          errorArray.push("Username fields must contain only alphanumeric characters.");
        }
        if (input. classList.contains('date') && !isValidDate(input)){
          errorArray.push("Date fields must match the format of XX/XX/XXXX.");
        }
        if (input.classList.contains('phone') && !isValidPhone(input)){
          errorArray.push("Phone fields must match the format of XXX-XXX-XXXX.")
        }
        if (input.classList.contains('password') && !isValidPassword(input)){
          errorArray.push("Password fields must contain one or more of each of the following types: uppercase letters, lowercase letters, numbers, special characters.");
        }
    }
    if (errorArray.length > 0){
      //prevent form submission if there were errors  
      event.preventDefault();
      // Creates a list of errors from a given array
      let errorLists = document.createElement('ul');
      errorLists.style = "color:red";
      const newErrorArray = [...new Set(errorArray)];
      for (const error of newErrorArray)
      {
          const errorList = document.createElement('li');
          const errorText = document.createTextNode(error);     
          errorList.appendChild(errorText);
          errorLists.appendChild(errorList);
      }
      event.target.parentNode.querySelector('.errors').appendChild(errorLists); 
    }
  }
  
  /**
   * Add event listener to the form
   */
  
  for (const form of document.getElementsByTagName('form'))
   {
     form.addEventListener('submit', validateForm)
   }