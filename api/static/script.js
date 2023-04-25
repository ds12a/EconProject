function addToConversation(reply) {
    document.getElementById("conversation").innerHTML = document.getElementById("conversation").innerHTML.replaceAll('class="server-msg"', "");
    document.getElementById("conversation").innerHTML = document.getElementById("conversation").innerHTML.replaceAll('class="user-msg"', "");
    document.getElementById("conversation").innerHTML += "<br>";
    if (reply[0] == "user") document.getElementById("conversation").innerHTML += "<h6 class='user-msg'>" + reply[1] + "</h6>";
    else if (reply[0] == "assistant") document.getElementById("conversation").innerHTML += "<h4 class='server-msg'>" + reply[1] + "</h4>";
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


function login(resuming) {
    let code = prompt("Enter your access code:");

    if (code == null || code == "") login(resuming);

    if (code) {
        setCookie("code", code, 1);
        if (!resuming) {
            document.getElementById("conversation").innerHTML = "<h4>Authenticating access code and generating story...</h4><div class='overlay'><div class='spinner-border' style='width: 10em; height: 10rem;' role='status'><span class='visually-hidden'>Loading...</span></div></div>";
            setCookie("story", Math.floor(Math.random() * 7).toString(), 1);
        
            let info = [];
        info.push({"story" : getCookie("story")});
        info.push({"code" : code});  
            
        
        
        fetch('/', {   // assuming the backend is hosted on the same server
                          method: 'POST',
                            headers: {
                              'Accept': 'application/json',
                              'Content-Type': 'application/json'
                            },
                          body: JSON.stringify(info),
                      }).then((response) => response.json()).then(function(r) {
            text = r["auth"];
                        if (text === "success") {
                            document.getElementById("particles-js").style.backgroundColor = "#000000";
                            document.getElementById('prompt').disabled = false;
                            document.getElementById("tokDisplay").innerHTML = "Tokens Used: " + r["tokens_used"];                                            document.getElementById("conversation").innerHTML = "<h4>" + r["chatResponse"] + "</h4>";
                            conversation.push({"assistant" : r["chatResponse"]});
                            
                        }
                        else {
                            document.getElementById("particles-js").style.backgroundColor = "#FF0000";
                            alert("Authentication failed");
                            login(resuming);
                        }
                      });
        }
        
    }
    
}