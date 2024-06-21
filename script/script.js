// let wrapper = document.querySelector("#wrapper"),
//   main = document.querySelector("#main"),
//   arrBlocks = [];
// for (let i = 1; i <= 76; i++) {
//   let block = document.createElement("article"),
//     num = document.createElement("p");

//   block.classList.add("article");
//   num.textContent = i;

//   main.append(block);
//   block.append(num);
//   arrBlocks.push(block);

//   for (let j = 0; j <= 5; j++) {
//     let txt = document.createElement("hr");
//     block.append(txt);
//   }
// }
// for (let k = 1; k <= 33; k++) {
//   let res;
//   res = arrBlocks[Math.floor(Math.random() * arrBlocks.length)];
//   for(let item of arrBlocks) {
//     if(res === item) {
//         let img = document.createElement('div')
//         img.classList.add('img')
//         img.textContent = 'IMAGE'
//         item.prepend(img)
//     }
//   }
// }

let images = document.querySelectorAll(".articleImg"),
  articleTitles = document.querySelectorAll(".articleTitle"),
  articleTxt = document.querySelectorAll(".articleTxt"),
  arrNumArticle = [1, 8, 12, 13, 14, 29, 34, 35, 47, 56, 59, 62, 68, 72, 77];
imgLink =
  "https://wp-s.ru/wallpapers/9/19/508322161627456/foto-zelenoj-doliny-na-fone-golubogo-neba.jpg";

for (let image of images) {
  image.src = imgLink;
}
for (let articleTitle of articleTitles) {
  articleTitle.textContent = "Title";
}
for (let i = 0; i <= articleTxt.length; i++) {
  articleTxt[i].innerHTML = `<B>${i + 1}</B>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  for (let num of arrNumArticle) {
    if ([i] == num) {
      articleTxt[i].innerHTML =
        `<B>${i + 1}</B>. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
    }
  }
}
