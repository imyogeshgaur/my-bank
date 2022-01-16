const genQR = () =>{
     document.querySelector('#contact').style.display = "none";
     document.querySelector('.secondary').style.display = "none";
     new QRCode(document.getElementById("qr"), location.href);
}