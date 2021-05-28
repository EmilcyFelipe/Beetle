let bt = document.querySelector(".beetle");
bt.addEventListener(("mouseover"),()=>{
    document.querySelector(".armour").style.animation="flyMode 1s forwards";
});
let mb = document.querySelector(".mainBody");
mb.addEventListener(("mouseover"),()=>{
    document.querySelector(".wingLeft").style.animation="flyLeftWing .07s alternate infinite";
    document.querySelector(".mainBody").classList.add("fly");
});