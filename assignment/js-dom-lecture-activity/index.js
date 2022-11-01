const listItems = document.querySelectorAll('li');
const addCompleted = (event) =>
{
    Event.target.classlist.toggle('completed');
}

for(const thisItem of listItems)
{
    thisItem.addEventListener('click',(event) => 
    {
        event.target.classList.toggle('completed');
    })
}
