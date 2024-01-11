// content.js
const ul = document.querySelector("#container-nav > ul.user-nav.nav-group");
const li = document.createElement("li");
const img = document.createElement("img");

if (ul) {
  li.className = "nav-item";
  li.id = "activity-wall";

  img.src = chrome.runtime.getURL("images/icon1.png");
  img.alt = "Activity Wall";

  img.style.width = "32px";
  img.style.height = "32px";

  li.appendChild(img);
  ul.appendChild(li);
}
else {
  console.log("Failed");
}

