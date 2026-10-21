
const BtnDivFemDestaque = document.getElementById("BtnDivFemDestaque");
const BtnCard = document.getElementById("BtnCard");
const BtnCard2 = document.getElementById("BtnCard2");
const BtnCard3 = document.getElementById("BtnCard3");
const BtnFechar = document.getElementById("BtnFechar");
const BtnFechar2 = document.getElementById("BtnFechar2");
const BtnFechar3 = document.getElementById("BtnFechar3");
const dialog = document.getElementById("dialog");
const dialog2 = document.getElementById("dialog2");
const dialog3 = document.getElementById("dialog3");


function abrirWiki () {
    window.location.href="./pages/Adabio/Adabio.html"
};


BtnDivFemDestaque.onclick = ()=>{
   return abrirWiki()
   
}

BtnCard.onclick = ()=>{
    dialog.showModal();
    window.scro
}
BtnFechar.onclick = ()=>{
    dialog.close();
};
BtnCard2.onclick=()=>{
    dialog2.showModal();
}
BtnFechar2.onclick = ()=>{
    dialog2.close();
};
BtnCard3.onclick=()=>{
    dialog3.showModal();

}
BtnFechar3.onclick = ()=>{
    dialog3.close();
}


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.addEventListener('load', function () {
    window.scrollTo(0, 0);
});