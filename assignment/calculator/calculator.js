
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => 
    {
        button.addEventListener('click', (e) => 
        {
            switch(e.target.innerText)
            {
                case 'C':
                    display.innerText = '';
                    break;
                case '=':
                    try{
                        display.innerText = eval(display.innerText);
                    } catch {
                        display.innerText = "Error"
                    }
                    break;
                case '←':
                    if (display.innerText){
                    display.innerText = display.innerText.slice(0, -1);
                    }
                    break;
                default:
                    display.innerText += e.target.innerText;
            }
        });
    });


let buttons_2 = Array.from(document.querySelectorAll('button'));
buttons_2.map(button => 
    {
        button.addEventListener('click', (e) => 
        {
            let output = document.getElementById('output'); 
            let num_1 = parseInt(document.getElementById('num_1').value);
            let num_2 = parseInt(document.getElementById('num_2').value);
            switch(e.target.id)
            {
                case 'add':
                    output.textContent = `${num_1}+${num_2}=${num_1 + num_2}`;
                    break;
                case 'subtract':
                    output.textContent = `${num_1}-${num_2}=${num_1 - num_2}`;
                    break;
                case 'multiply':
                    output.textContent = `${num_1}*${num_2}=${num_1 * num_2}`;
                    break;
                case 'divide':
                    if(num_2 != 0){
                       output.textContent = `${num_1}/${num_2}=${num_1 / num_2}`;
                    break; 
                    } else {
                       output.textContent ='Error: cannot divide by zero';
                    }
                case 'power' :
                       output.textContent = num_1 ** num_2;
                    break;
                case 'square_root':
                       output.textContent = Math. sqrt(num_1);
                       break;
            }
        })
    }

)