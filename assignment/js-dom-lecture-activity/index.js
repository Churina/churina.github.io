
const listItems = document.querySelectorAll('li');
const addCompleted = (event) =>
{
    event.target.classList.toggle('completed');
}
for(const thisItem of listItems){
    thisItem.addEventListener('click', addCompleted)
}

/*
const onAddToDo = (event) => 
{
    const newListItem = document.createElement('li')
    const text = document.createTextNode('figure this part out later');
    newListItem.appendChild(text);
    document.querySelector('ul').appendChild(newListItem);
}
document.querySelector('button').addEventListener('click', onAddToDo)
*/


/*
const onAddToDo = (event) => {
    const text = event.target.parentNode.querySelector('input').value;
    const newListItem = document.createElement('li');
    const liText= document.createTextNode(text);
    newListItem.appendChild(liText);
    document.querySelector('ul').appendChild(newListItem);
}
document.querySelector('button').addEventListener('click', onAddToDo)
*/


const onAddToDo = (event) => {
    const text = event.target.parentNode.querySelector('input').value;
    const newListItem = document.createElement('li');
    newListItem.addEventListener('click', addCompleted);
    const liText= document.createTextNode(text);
    newListItem.appendChild(liText);
    document.querySelector('ul').appendChild(newListItem);
    }
    document.querySelector('button').addEventListener('click', onAddToDo)