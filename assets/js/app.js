const userInput = document.getElementById("userInput");
const send = document.getElementById("send");
const chatBody = document.getElementById("chatBody");
const resetChatBtn = document.getElementById("resetChat");

userInput.addEventListener("input", () =>{
    if (userInput.value.length > 0) {
        send.classList.add("send")
    } else{
        send.classList.remove("send")
    }
});

send.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        sendMessage()
    }
});

function sendMessage() {
    const message = userInput.value
    if (!message == "") {
        displayMessage(message, "sent")
        userInput.value = ""
    }
}

function displayMessage(message, type) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("user", type);
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}



resetChatBtn.addEventListener("click", () => {
    window.location.reload()
});