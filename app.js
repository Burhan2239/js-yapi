const body = document.querySelector("body");
const button = document.querySelector("button");
const colors = ["red","white","black","yellow","green","#32a852","#324ea8"]

button.addEventListener("click" , changeBackground);

let sira = 0 ;

function changeBackground(){
    //rastgele bir renk
    //const rastgeleSayi = Math.floor(Math.random() * colors.length);
    //const secilenRenk = colors[rastgeleSayi];
    //console.log(rastgeleSayi, secilenRenk);
    //body.style.backgroundColor = secilenRenk;

    //sirayla arkaplan rengi sec
    console.log(sira)
    if (sira == 7) sira=0;
    const secilenRenk = colors[sira];
    sira++;
    body.style.backgroundColor = secilenRenk;
}