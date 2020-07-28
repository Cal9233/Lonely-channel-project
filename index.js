const chatbox = document.querySelector("#chatbox")
const form = document.querySelector("form")
const button = document.querySelector("button")
const input = document.querySelector("input")

form.addEventListener("submit", submitForm)
button.addEventListener("click", getJoke)

function submitForm(cancelRefresh){
    cancelRefresh.preventDefault();
        const meMyselfI = ["Me", "Myself", "I"][Math.floor(Math.random() * 3)];
        displayMessage(meMyselfI,input.value);
        form.reset();
}

let newMessage = false;
function displayMessage (sender, theText){

if (!theText.length) return;
newMessage++;
const timeStamp = (new Date()).toLocaleTimeString()
const text = `<ul class = 'message' id = '${newMessage}'> 
                    <li>${timeStamp}</li>
                    <li class = "sender">${sender}</li>
                    <li>${theText}</li>
                    <li class = "delete" onclick = 'deleteMe(${newMessage})'> Click Delete </li>
            </ul>`
    chatbox.innerHTML += text;
    chatbox.scrollTop = chatbox.scrollHeight;
}


function deleteMe(newMessage){
    const text = document.getElementById(newMessage);
    text.remove();

}
 
function getJoke(){
    fetch('https://api.icndb.com/jokes/random')
    .then((response) => response.json())
    .then ((json) => displayMessage("Fact", json.value.joke))
}


