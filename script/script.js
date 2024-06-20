let wrapper = document.querySelector("#wrapper"),
  main = document.querySelector("#main"),
  arrBlocks = [];
for (let i = 1; i <= 76; i++) {
  let block = document.createElement("article"),
    num = document.createElement("p");

  block.classList.add("article");
  num.textContent = i;

  main.append(block);
  block.append(num);
  arrBlocks.push(block);

  for (let j = 0; j <= 5; j++) {
    let txt = document.createElement("hr");
    block.append(txt);
  }
}
for (let k = 1; k <= 33; k++) {
  let res;
  res = arrBlocks[Math.floor(Math.random() * arrBlocks.length)];
  for(let item of arrBlocks) {
    if(res === item) {
        let img = document.createElement('div')
        img.classList.add('img')
        img.textContent = 'IMAGE'
        item.prepend(img)
    }
  }
}
