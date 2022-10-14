function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if (i % 2 ===0 && i% 3 ===0) console.log("Fizz Buzz");
        else if (i%3 ===0)console.log("Buzz");
        else if (i%2===0)console.log("Fizz");
        else console.log(i);
    }
}

fizzBuzz(6);




/*
    let output="";
    let startNumber =1;
    let endNumber = 100;

    for(let counter = startNumber; counter <= endNumber; counter = counter + 1){
        if ((counter % 3 == 0) && (counter % 5 == 0)){
            output = output + "FizzBuzz";
        } else if(counter % 3 == 0){
            output = output + "Fizz";
        } else if(counter % 5 == 0){
            output = output + "Buzz";
        } else{
            output = output + counter;
        }  
     }
    document.getElementById("results").innerHTML=output;
*/


/*
<script>
    const arr = [
      [1, 2], [3, 4], [5, 6]
    ];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      }
    }
</script>
*/