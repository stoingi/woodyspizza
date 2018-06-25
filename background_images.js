    // hier anpassen
    const images = [
      "images/background-1.png",
      "images/background-2.png",
      "images/background-3.png"
    ]

    document.addEventListener("DOMContentLoaded", function(event) {
      const imageId = Math.floor(Math.random() * images.length)
      document.getElementById("banner").style.backgroundImage = "url(" + images[imageId] + ")"
    });
