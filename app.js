const rn=(Math.floor(Math.random())*101);
let count=0;

const userguessInput = document.getElementById("input1");
const msg = document.getElementById("l1");
const countbutton = document.getElementById("l2");
const checkbutton = document.getElementById("btn");
const resetbutton = document.getElementById("btn1");

checkbutton.addEventListener("click",guessnumber);
resetbutton.addEventListener("click",resetfun);


function guessnumber()
{
    count++;
    const guess = Number(userguessInput.value);
    if(guess>100)
        {
           alert("Invalid input ");
        }
    else if(rn==guess)
    {
        alert("congratulation you won the game");
    }
    else if(rn>guess)
    {
        msg.textContent = "Try with larger number";
        msg.style.color="white";
    }
    else if(rn<guess)
    {
        msg.textContent = "Try with smaller number";
        msg.style.color="white";
    }
    countbutton.textContent=`Attempts: ${count}`;
}
function resetfun()
{
    location.reload();
}