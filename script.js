"use strict";

function generate(event) {
  event.preventDefault();

  let form = document.querySelector("form");
  let img = form.querySelector("input[name=image]").value;
  let topText = form.querySelector("input[name=top]").value;
  let bottomText = form.querySelector("input[name=bottom]").value;

  let memesWrap = document.querySelector(".memeWrap");
  let newMeme = document.createElement("div");
  newMeme.innerHTML = `<h2 class="text" id="top-text"> ${topText} </h2>
                    <img src="${img}"/>
                    <h2 class="text" id="bottom-text"> ${bottomText} </h2>
                    <button onclick="deleteMeme(this)" class="del-btn">X</button>`;
  memesWrap.prepend(newMeme);

  form.reset();

}

function deleteMeme(element){
  let meme = element.parentElement;
  meme.remove();
}