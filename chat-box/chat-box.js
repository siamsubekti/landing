
const messages = [
    "Bagaimana kabarmu?",
    "Baik",
    "Apa itu serius yang kamu katakan tadi?",
    "Dimana kamu tinggal?",
    "Kamu sedang tidak bercanda kan?",
    "Jadi apa maksud kamu ?",
    "Jazakumullohi khairan katsiron",
    "Syukron"
  ];
  let counter = 0;
  const chatContainer = document.querySelector(".container");
  const chatArea = document.querySelector(".message-body");
  const text = document.querySelector("#text");
  const form = document.querySelector(".form");
  
  function isOverflown(element) {
    return (
      element.scrollHeight > element.clientHeight ||
      element.scrollWidth > element.clientWidth
    );
  }
  
  function scroll() {
    chatArea.scroll(0,chatArea.scrollHeight);
  }
  
  function reply(msg) {
    let li = document.createElement("li");
    li.innerHTML = msg;
    li.classList.add("chatbox");
    li.classList.add("chatbox-incoming");
    chatArea.append(li);
    scroll();
  }
  
  
  //EVENT LISTENERS
  text.addEventListener("focus", () => {
    chatContainer.scrollTop = chatArea.scrollHeight + 560;
  });
  
  form.addEventListener("submit", e => {
    e.preventDefault();
    msg = text.value;
    let li = document.createElement("li");
    li.innerHTML = msg;
    li.classList.add("chatbox");
    li.classList.add("chatbox-outgoing");
    chatArea.append(li);
    scroll();
    text.value = "";
    text.focus();
    setTimeout(reply, 1000, messages[counter]);
    counter++;
    if (counter == messages.length) {
      counter = 0;
    }
  });
  
  window.onload = ()=>{
    reply("Hi Assalamualaikum")
  }
  
  
  
  
  //buble body
  const body = document.querySelector('body');