"use strict";

/**
 * Function to be called when user hits 'Generate Meme' button
 * generates new meme and adds it to the page!
 * does not sanitize data! (yet)
 * @param {*} event
 */
function createMeme(event) {
  event.preventDefault();

  //access form data
  let form = document.getElementById("memeForm");
  let imgURL = document.getElementById("image").value;
  let topText = document.getElementById("top").value;
  let bottomText = document.getElementById("bottom").value;
  let memesWrapper = document.getElementById("memes-wrapper");

  //create a meme div
  let newMeme = document.createElement("div");
  newMeme.className = "meme-div"
  newMeme.style.backgroundImage = `url(${imgURL})`;
  newMeme.style.backgroundSize = "cover";

  newMeme.innerHTML =
  `<p class="text" id="top-text"> ${topText} </p>
  <p class="text" id="bottom-text"> ${bottomText} </p>
  <button onclick="deleteMeme(this)" class="del-btn">Delete</button>`;

  //add meme-div inside memes-wrapper div
  memesWrapper.prepend(newMeme);

  //reset form for the next meme
  form.reset();
}

/**
 * This function deletes an element's parent element.
 * i.e. the button's parent element (which is the meme-div) will be deleted
 * @param {*} element
 */
function deleteMeme(element){
  let meme = element.parentElement;
  meme.remove();
}