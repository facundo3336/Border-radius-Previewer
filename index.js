const topLeftInput = document.getElementById("topLeftInput");
const bottomLeftInput = document.getElementById("bottomLeftInput");
const rightTopInput = document.getElementById("rightTopInput");
const rightBottomInput = document.getElementById("rightBottomInput");
const viewer = document.getElementById("viewer");
const viewerContent = document.getElementsByClassName("viewerContent");
const topLeftTextContainer = document.getElementById("topLeftValue");
const topRightTextContainer = document.getElementById("topRightValue");
const bottomLeftTextContainer = document.getElementById("bottomLeftValue");
const bottomRightTextContainer = document.getElementById("bottomRightValue");

function setTopLeftBorder(borderValue) {
  viewer.style.borderTopLeftRadius = borderValue + "px";
}

function setBottomLeftBorder(borderValue) {
  viewer.style.borderBottomLeftRadius = borderValue + "px";
}

function setTopRightBorder(borderValue) {
  viewer.style.borderTopRightRadius = borderValue + "px";
}

function setBottomRightBorder(borderValue) {
  viewer.style.borderBottomRightRadius = borderValue + "px";
}

topLeftInput.addEventListener("input", (event) => {
  setTopLeftBorder(event.target.value);
  topLeftTextContainer.innerHTML = `border-top-left-radius: ${event.target.value};`;

  if (event.target.value === "0" || event.target.value.length === 0) {
    topLeftTextContainer.innerHTML = "";
  }
});

bottomLeftInput.addEventListener("input", (event) => {
  setBottomLeftBorder(event.target.value);
  bottomLeftTextContainer.innerHTML = `border-bottom-left-radius: ${event.target.value};`;

  if (event.target.value === "0" || event.target.value.length === 0) {
    bottomLeftTextContainer.innerHTML = "";
  }
});

rightTopInput.addEventListener("input", (event) => {
  setTopRightBorder(event.target.value);
  topRightTextContainer.innerHTML = `border-top-right-radius: ${event.target.value};`;

  if (event.target.value === "0" || event.target.value.length === 0) {
    topRightTextContainer.innerHTML = "";
  }
});

rightBottomInput.addEventListener("input", (event) => {
  setBottomRightBorder(event.target.value);
  bottomRightTextContainer.innerHTML = `border-bottom-right-radius: ${event.target.value};`;

  if (event.target.value === "0" || event.target.value.length === 0) {
    bottomRightTextContainer.innerHTML = "";
  }
});
