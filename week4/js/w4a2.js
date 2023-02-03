//const fetch = require("node-fetch");

function ajax(url) {
  // your code here

  return fetch(url).then((res) => res.json());
}

function render(data) {
  // your code here
  let html = document.getElementById("info-text");
  data.map((info) => {
    const p = document.createElement("p");
    p.setAttribute("id", "fetchresult");
    p.innerHTML =
      info.name + " price:" + info.price + " description:" + info.description;
    html.appendChild(p);
  });
  console.log(data);
}

const url = "https://appworks-school.github.io/Remote-Assignment-Data/products";
ajax(url).then((data) => {
  render(data);
});
