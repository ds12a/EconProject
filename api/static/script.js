function addToConversation(reply) {
    document.getElementById("conversation").innerHTML += "<br>";
    if (reply[0] == "user") document.getElementById("conversation").innerHTML += "<h6>" + reply[1] + "</h6>";
    else document.getElementById("conversation").innerHTML += "<h4>" + reply[1] + "</h4>";
    if (reply[0] != "server") document.getElementById("conversation").innerHTML += "<br>";
}

window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

particlesJS.load('particles-js', './static/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');});


