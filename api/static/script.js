function displayConversation(formData) {
    let html = "";

    for (const reply of formData.entries()) {
        html += reply[1] + "<br>";
        if (reply[0] != "server") html += "<br>";
    }

    document.getElementById("conversation").innerHTML = html + "<br>";
}

particlesJS.load('particles-js', './static/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');});
      