const tempTxt = document.querySelectorAll(".item");

for (let i = 0; i < tempTxt.length; i++) {
  let img = i + 1;
  tempTxt[i].style.backgroundImage = `url(Images/img${img}.jpg)`;
}


