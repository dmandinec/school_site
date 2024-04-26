document.getElementById('nacist').addEventListener('click', function() {
    var kontainer = document.getElementById("kontainer");

    // Clear the container in case it already contains an iframe
    kontainer.innerHTML = '';

    // Create a new iframe element
    var iframe = document.createElement('iframe');

    // Set properties for the iframe
    iframe.src = "https://kspa.dmandinec.net/"; // Change this URL to the desired destination
    iframe.width = "800";
    iframe.height = "600";
    iframe.frameBorder = "0";
    iframe.allow = "autoplay; encrypted-media";
    iframe.allowFullscreen = true;

    // Append the iframe to the kontainer
    kontainer.appendChild(iframe);
});
