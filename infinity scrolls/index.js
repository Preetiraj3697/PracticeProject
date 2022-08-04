let listDiv = document.getElementById("list");
let modal = document.querySelector(".modal");
let title = document.getElementById("title");
let closeModel = document.getElementById("close-btn");
let popup = document.getElementById("popup");
let main = document.getElementById("main");
let items = 1;

let scrollFun = () => {
  for (let i = 0; i < 25; i++) {
    let newList = document.createElement("li");
    newList.innerText = "Masai Student " + items++;
    newList.addEventListener("click", () => {
      title.innerText = newList.innerText;
      modal.style.display = "block";
      listDiv.style.display = "none";
    });
    listDiv.append(newList);
  }
};

listDiv.addEventListener("scroll", function () {
  if (listDiv.scrollTop + listDiv.clientHeight >= listDiv.scrollHeight) {
    scrollFun();
  }
});

scrollFun();

closeModel.addEventListener("click", () => {
  console.log("hello");
  modal.style.display = "none";
  listDiv.style.display = "block";
});

window.onclick = function (event) {
  console.log("clicked");
  console.log(popup);
  console.log(event.target);
  if (event.target == main) {
    popup.style.display = "none";
    listDiv.style.display = "block";
  }
};