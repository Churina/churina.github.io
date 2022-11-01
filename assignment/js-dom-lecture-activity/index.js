const listItems = document.querySelectorAll('li');
for(const thisItem of listItems)
{
    thisItem.addEventListener('click',(event) => 
    {
        event.target.classList.toggle('completed');
    })
}
