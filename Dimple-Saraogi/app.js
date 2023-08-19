let inp = document.querySelector("input");
let btn = document.querySelector("button");
let body = document.querySelector("body");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let li = document.createElement("li");
  li.innerText = inp.value;
  let delBtn = document.createElement("button");
  delBtn.innerHTML = "Delete";
  delBtn.classList.add("delete");
  ul.appendChild(li);
  li.appendChild(delBtn);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
