function fizzBuzz(num){
    for(let i = 1; i <= num; i++){
        if (i % 2 ===0 && i% 3 ===0) console.log("Fizz Buzz");
        else if (i%3 ===0)console.log("Buzz");
        else if (i%2===0)console.log("Fizz");
        else console.log(i);
    }
}
fizzBuzz(6);


/* This is correct.
    <p id="demo"></p>
    <script>
             let output = "";
              for (let i = 1; i < 100; i++){
                if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
                  output = output + "FizzBuzzBang!!!" + "<br>";
                } else if (i% 3 == 0 && i % 5 == 0) {
                  output = output + "FizzBuzz!!" + "<br>";
                } else if (i % 5 == 0 && i % 7 == 0) {
                  output = output + "BuzzBang!!" + "<br>";
                } else if (i % 3 == 0 && i % 7 == 0) {
                  output = output + "FizzBang!!" + "<br>";
                } else if (i % 3 == 0) {
                  output = output + "Fizz" + "<br>";
                } else if (i % 5 == 0) {
                  output = output + "Buzz" + "<br>";
                } else if (i% 7 == 0) {
                  output = output + "Bang" + "<br>";
                } else {
                 output = output + i + "<br>";
                }
              }
              document.getElementById('demo').innerHTML=output;          
    </script>
*/



/* This is also correct. using fuction.
 <main>
        <h2>FizzBuzzBang</h2>
        <button type="button" onclick="fizzBuzzBang()">Click Me </button>
        <p id="results" style="text-align:center"></p>
        <script>
            function fizzBuzzBang() {
              let output = "";
              let startNumber = 1;
              let endNumber = 120;
              for (let counter = startNumber; counter <= endNumber; counter++) {
                if (counter % 3 == 0 && counter % 5 == 0 && counter % 7 == 0) {
                  output = output + "FizzBuzzBang!!!" + "<br>";
                } else if (counter % 3 == 0 && counter % 5 == 0) {
                  output = output + "FizzBuzz!!" + "<br>";
                } else if (counter % 5 == 0 && counter % 7 == 0) {
                  output = output + "BuzzBang!!" + "<br>";
                } else if (counter % 3 == 0 && counter % 7 == 0) {
                  output = output + "FizzBang!!" + "<br>";
                } else if (counter % 3 == 0) {
                  output = output + "Fizz" + "<br>";
                } else if (counter % 5 == 0) {
                  output = output + "Buzz" + "<br>";
                } else if (counter % 7 == 0) {
                  output = output + "Bang" + "<br>";
                } else {
                  output = output + counter + "<br>";
                }
                  document.getElementById("results").innerHTML=output;
              }
            }
        </script>
        </main>
*/


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