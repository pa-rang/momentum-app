const body = document.querySelector("body");

function getImage(callbackFunc){
    fetch("https://source.unsplash.com/1600x900/?nature")
      .then(function(response) {
          callbackFunc(response);
      });
}

getImage(function(image){
    console.log(image);
    // add background image
    const img = document.createElement("img");
    body.appendChild(img);
    img.src = image.url;
    img.classList.add("bg-image");
    
    // add cover on background image
    const div = document.createElement("div");
    body.appendChild(div);
    div.classList.add("bg-cover");
})