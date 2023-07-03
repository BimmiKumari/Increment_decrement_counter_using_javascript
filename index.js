const constantvalue= document.querySelector('#counter');
function increment()
{
   
    let value=parseInt(constantvalue.innerText);
    value=value+1;
    constantvalue.innerText=value;
}
function decrement()
{
   
    let value=parseInt(constantvalue.innerText);
    value=value-1;
    constantvalue.innerText=value;
}