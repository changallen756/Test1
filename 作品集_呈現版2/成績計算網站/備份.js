//2025/03/10 20:56 還沒把成績輸入欄位的組成變成用動態生成的版本
let html = document.querySelector("html");
let body = document.querySelector("body");
let showPicture = document.querySelector("#showPicture");
let masks = document.querySelectorAll("#showPicture .masks");
let imgBox = document.querySelector("#showPicture #imgBox");
let img = document.querySelector("#showPicture #imgBox img");
let gradientPicture = document.querySelector("#gradientPicture");
let openingAnimation = document.querySelector("#openingAnimation");
let content = document.querySelector("#content");
let inputBoxes = document.querySelector("#inputBoxes");
let categoryBox = document.querySelector("#inputBoxes .categoryBox");
let classCategory = document.querySelector(".classCategory");
let myList = document.querySelector("#myList");
let triangleCharacter = document.querySelector("#triangleCharacter");
let functionButton = document.querySelector(
  ".functionButtonHorizontalAlignBox img"
);
let addButton = document.querySelector("#addButton");
let htmlClientHeight = html.clientHeight;
let htmlClientWidth = html.clientWidth;
let windowInnerHeight = window.innerHeight;
let windowInnerWidth = window.innerWidth;
let flagForTriangleCharacter = 0;
let flagForClassCategory = 0;
//如果要顯示開場動畫，以下的內容要變成註解
body.style.backgroundColor = "rgb(30,30,30)";
openingAnimation.classList.add("doNotShow");
//如果要顯示開場動畫，以下的內容要執行
// body.style.backgroundColor = "white";
// content.classList.add("doNotShow");
// window.addEventListener("load", () => {
//   body.classList.add("toWhiteAnimation");
//   let maskHeight = 0.5;
//   let maskWidth = imgBox.clientWidth;
//   window.addEventListener("resize", pictureResizing);
//   function pictureResizing() {
//     placeMaskOfShowingPicture(maskHeight, imgBox.clientWidth * 0.9);
//   }
//   let flag = 0;
//   let half = 4000;
//   let difference;
//   let angle;
//   let radian;
//   let offset;
//   let showPictureInterval = window.setInterval(() => {
//     flag += 10;
//     difference = Math.abs(flag - half);
//     angle = (difference / half) * 180 + 180;
//     radian = (angle / 180) * 3.1415926535;
//     offset = Math.cos(radian);
//     offset = Math.abs(offset) * 0.0005;
//     if (flag >= 4000) {
//       maskHeight = maskHeight - (0.00625 + offset);
//     } else {
//       maskHeight = maskHeight - 0.00625;
//     }
//     maskWidth = imgBox.clientWidth;
//     placeMaskOfShowingPicture(maskHeight, maskWidth);
//     if (maskHeight <= 0) {
//       window.clearInterval(showPictureInterval);
//       imgBox.style.width = "70vw";
//       imgBox.style.height = `${htmlClientWidth * 0.7}`;
//       img.classList.add("zoomInAnimation");
//       gradientPicture.classList.add("goRightAnimation");
//       window.setTimeout(() => {
//         openingAnimation.classList.add("doNotShow");
//         body.style.backgroundColor = "rgb(30, 30, 30)";
//         content.classList.toggle("doNotShow");
//         window.removeEventListener("resize", pictureResizing);
//         // window.setTimeout(() => {
//         //   openingAnimation.style.display = "none";
//         // }, 10);
//       }, 1000);
//     }
//   }, 6);
// });
// 顯示myList的項目;
let listItemContent = {
  1: { title: "CDMM", content: "Communication Studies" },
  2: { title: "CIS", content: "Computer and Information Sciences" },
  3: { title: "CS", content: "Computer Science" },
  4: { title: "CRMJ", content: "Criminal Justice" },
  5: { title: "ECON", content: "Economics" },
  6: { title: "CHIN", content: "Chinese" },
  7: { title: "CRDEV", content: "Career Development" },
  8: { title: "CHEM", content: "Chemistry" },
  9: { title: "ACCT", content: "Accounting" },
  10: { title: "ASL", content: "American Sign Language" },
  11: { title: "ANTH", content: "Anthropology" },
  12: { title: "ART", content: "art" },
  13: { title: "BIOL", content: "Biology" },
  14: { title: "BUSM", content: "Business Mgt" },
  15: { title: "EDU", content: "Education" },
  16: { title: "ELED", content: "Elementary Education" },
  17: { title: "EMGT", content: "Emergency Management" },
  18: { title: "ENGL", content: "English as Int'l Language" },
  19: { title: "ENTR", content: "Entreprenuership" },
};
//顯示myList的項目
// let listItem = myCreateElement("div", myList, "class", "listItem");
for (let i = 0; i < Object.keys(listItemContent).length; i++) {
  createListItem(
    listItemContent[`${i + 1}`].title,
    listItemContent[`${i + 1}`].content
  );
}
// console.log(windowInnerHeight, myList.offsetParent);
let resizeEventListener = window.addEventListener("resize", () => {
  myList.style.height = `calc(${
    windowInnerHeight - categoryBox.offsetTop
  }px-60px)`;
});
function createListItem(titleFromObject, contentFromObject) {
  let listItem = myCreateElement("div", myList, "class", "listItem");
  let title = myCreateElement("div", listItem, "class", "title");
  title.innerHTML = titleFromObject;
  let content = myCreateElement("div", listItem, "class", "content");
  content.innerHTML = contentFromObject;
}
//新增一筆成績資料輸入欄位
addButton.addEventListener("click", function () {});
//classCategory與myList處理開始
classCategory.addEventListener("focus", () => {
  flagForClassCategory = 1;
  myList.classList.remove("doNotShow");
  myList.classList.add("list-group");
});
classCategory.addEventListener("blur", () => {
  flagForClassCategory = 0;
  if (flagForTriangleCharacter != 1) {
    myList.classList.add("doNotShow");
    myList.classList.remove("list-group");
  }
});
triangleCharacter.addEventListener("mouseover", () => {
  flagForTriangleCharacter = 1;
});
triangleCharacter.addEventListener("mouseleave", () => {
  flagForTriangleCharacter = 0;
});
triangleCharacter.addEventListener("click", () => {
  classCategory.focus();
  myList.classList.remove("doNotShow");
  myList.classList.add("list-group");
});
triangleCharacter.addEventListener("mousedown", () => {
  if (flagForClassCategory == 1) {
    function f1() {
      classCategory.focus();
      html.removeEventListener("mouseup", f1);
    }
    html.addEventListener("mouseup", f1);
  }
});
function placeMaskOfShowingPicture(maskHeight, maskWidth) {
  masks[0].style.setProperty("width", `${maskWidth}px`);
  masks[1].style.setProperty("width", `${maskWidth}px`);
  masks[0].style.left = getPosition(imgBox).x;
  masks[1].style.left = getPosition(imgBox).x;
  let tempY =
    imgBox.offsetTop +
    parseFloat(
      window.getComputedStyle(imgBox)["margin-top"] +
        window.getComputedStyle(imgBox)["border-top-width"] +
        window.getComputedStyle(imgBox)["padding-top"]
    );
  masks[0].style.top = `${tempY}px`;
  masks[0].style.height = `${maskHeight * imgBox.clientHeight}px`;
  masks[1].style.bottom = `${
    0.96 * htmlClientHeight - (imgBox.offsetTop + imgBox.offsetHeight)
  }px`;
  //   masks[1].style.top = `${
  //     tempY +
  //     0.8 *
  //       (img.height -
  //         parseFloat(window.getComputedStyle(img)["border-top-width"]))
  //   }px`;
  masks[1].style.height = `${maskHeight * imgBox.clientHeight}px`;
}
function getPosition(element) {
  let x = 0;
  let y = 0;
  while (element) {
    x +=
      element.offsetTop +
      parseFloat(
        window.getComputedStyle(element)["margin-top"] +
          window.getComputedStyle(element)["border-top-width"] +
          window.getComputedStyle(element)["padding-top"]
      ) -
      element.scrollTop;
    y +=
      element.offsetLeft +
      parseFloat(
        window.getComputedStyle(element)["margin-left"] +
          window.getComputedStyle(element)["border-left-width"] +
          window.getComputedStyle(element)["padding-left"]
      ) -
      element.scrollLeft;
    element = element.offsetParent;
  }
  return { x: x, y: y };
}
function myCreateElement(elementType, parentElement, ...attributes) {
  let result = document.createElement(elementType);
  if (attributes != [] && attributes != undefined) {
    for (let i = 0; i < attributes.length; i += 2) {
      if (attributes[i] == "class") {
        result.classList.add(attributes[i + 1]);
      } else if (attributes[i] == "id") {
        result.id = attributes[i + 1];
      } else {
        result.setAttribute(attributes[i], attributes[i + 1]);
      }
    }
  }
  parentElement.appendChild(result);
  return result;
}
function generateInputBox() {
  let inputArea = myCreateElement("div", inputBoxes, "class", "inputArea");
  let categoryBox = myCreateElement("div", inputArea, "class", "categoryBox");
  let classCategory = myCreateElement(
    "input",
    categoryBox,
    "class",
    "classCategory",
    "class",
    "inputBox",
    "placeHolder",
    "class category"
  );
  let triangleCharacter = myCreateElement(
    "div",
    categoryBox,
    "id",
    "triangleCharacter"
  );
  triangleCharacter.innerHTML = "▼";
  //   console.log(triangleCharacter);
  let classNumber = myCreateElement(
    "input",
    inputArea,
    "class",
    "classNumber",
    "class",
    "inputBox",
    "placeholder",
    "class number"
  );
  let credits = myCreateElement(
    "input",
    inputArea,
    "class",
    "credits",
    "class",
    "inputBox",
    "placeholder",
    "credits"
  );
  let scores = myCreateElement("div", inputArea, "class", "scores");
  let trashCan = myCreateElement("div", inputArea, "class", "trashCan");
  scores.innerHTML = "B+";
  trashCan.innerHTML = '<img src="./recycle-bin5.png" alt="垃圾桶圖案" />';
}
generateInputBox();
generateInputBox();
// generateInputBox();
// generateInputBox();
// generateInputBox();
// generateInputBox();
// generateInputBox();
// generateInputBox();
// generateInputBox();
// generateInputBox();
// generateInputBox();
// generateInputBox();
