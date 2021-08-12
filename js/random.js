var imagenes = new Array();
imagenes[0] = "img/ropa/ropa1.jpg";
imagenes[1] = "img/ropa/ropa2.jpg";
imagenes[2] = "img/ropa/ropa3.jpg";
imagenes[3] = "img/ropa/ropa4.jpg";
imagenes[4] = "img/ropa/ropa5.jpg";
imagenes[5] = "img/ropa/ropa6.jpg";
imagenes[6] = "img/ropa/ropa7.jpg";
imagenes[7] = "img/ropa/ropa8.jpg";
imagenes[8] = "img/ropa/ropa9.jpg";
imagenes[9] = "img/ropa/ropa10.jpg";
imagenes[10] = "img/ropa/ropa11.jpg";
imagenes[11] = "img/ropa/ropa12.jpg";
imagenes[12] = "img/ropa/ropa13.jpg";
imagenes[13] = "img/ropa/ropa14.jpg";
imagenes[14] = "img/ropa/ropa15.jpg";
imagenes[15] = "img/ropa/ropa16.jpg";
imagenes[16] = "img/ropa/ropa17.jpg";
imagenes[17] = "img/ropa/ropa18.jpg";


    function getRandomImage(){

        var rnd = Math.floor(Math.random()*imagenes.length);
        return imagenes[rnd];
        console.log("get random");
    }

    function changeImage(){
        var setImg = document.querySelector(".img-to-change");
        var img2 = document.querySelector(".img-to-change2");
        
        setImg.style.opacity = 0;
        setImg.src = getRandomImage();
        setImg.style.opacity = 1;
        img2.src = getRandomImage();
        console.log("cambiado");
    }
    

   