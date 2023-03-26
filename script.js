"use strict";

function createMeme(event) {
  event.preventDefault();

  let form = document.getElementById("memeForm");
  let imgURL = document.getElementById("image").value;
  let topText = document.getElementById("top").value;
  let bottomText = document.getElementById("bottom").value;

  let memesWrapper = document.getElementById("memes-wrapper");
  let newMeme = document.createElement("div");
  newMeme.className = "meme-div"
  newMeme.style.backgroundImage = `url(${imgURL})`;
  newMeme.style.backgroundSize = "cover";
  newMeme.innerHTML = `<p class="text" id="top-text"> ${topText} </p>
                    <p class="text" id="bottom-text"> ${bottomText} </p>
                    <button onclick="deleteMeme(this)" class="del-btn">Delete</button>`;
  memesWrapper.prepend(newMeme);

  form.reset();
}

function deleteMeme(element){
  let meme = element.parentElement;
  meme.remove();
}