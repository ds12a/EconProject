function addToConversation(reply) {
    document.getElementById("conversation").innerHTML += "<br>";
    if (reply[0] == "user") document.getElementById("conversation").innerHTML += "<h6>" + reply[1] + "</h6>";
    else document.getElementById("conversation").innerHTML += "<h4>" + reply[1] + "</h4>";
    if (reply[0] != "server") document.getElementById("conversation").innerHTML += "<br>";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

particlesJS.load('particles-js', './static/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');});


let code = prompt("Enter your access code:");

let loginInfo = new FormData();
loginInfo.append("code", code);
loginInfo.append("init", "yes");

fetch('/', {   // assuming the backend is hosted on the same server
                  method: 'POST',
                  body: loginInfo,
              }).then((response) => response.text()).then(function(text) {
                  conversation.append("server", text);
                  addToConversation(["server", text]);
                  document.getElementById('prompt').disabled = false;
                  document.getElementById('prompt').focus();
                  window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
                  document.getElementById("particles-js").style.backgroundColor = "#000000";
              });