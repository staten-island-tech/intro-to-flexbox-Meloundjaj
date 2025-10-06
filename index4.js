const btn = document.querySelector(".btn");
function getRGB(){


    const box = document.querySelector(".box");
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    box.STYLE.backgrounfColor = `rgb(${r}, ${g}, ${b})`;
    //document.querySelector(".container").insertAdjacentElement("afterbegin", `<h1> </h1>`)



}
btn.addEventListener("click", getRGB);

