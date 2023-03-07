function displayConversation(formData) {
    let html = "";

    for (const reply of formData.entries()) {
        if (reply[0] == "user") html += "<h6>" + reply[1] + "</h6>";
        else html += "<h4>" + reply[1] + "</h4>";
        if (reply[0] != "server") html += "<br>";
    }

    document.getElementById("conversation").innerHTML = html + "<br>";
}

window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}

particlesJS.load('particles-js', './static/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');});


