const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text content!";

const red = document.createElement("p");
red.classList.add("red")
red.textContent = "Hey I'm red!";
red.style.color = "red";

const blue = document.createElement("h3");
blue.textContent = "I'm a blue h3!";
blue.style.color = "blue";

container.appendChild(content)
container.appendChild(red);
container.appendChild(blue);

const div2 = document.createElement("div");
div2.classList.add("div2");
div2.style.cssText = "background-color: pink; border-color: black;";

container.appendChild(div2)

const h1div = document.createElement("h1");
h1div.classList.add("h1div");
h1div.textContent = "I'm in a div";
div2.appendChild(h1div);

const pdiv = document.createElement("p");
pdiv.classList.add("pdiv");
pdiv.textContent = "ME TOO!"
div2.appendChild(pdiv)


