const images = document.querySelectorAll(".skills li");
        const modal = document.querySelector(".modal-info");
        const modalTxt = document.querySelector(".texto-ventana");
        const close = document.querySelector(".exit");
        const body = document.querySelector(".body");

        images.forEach((image) => {
            image.addEventListener("click", () => {
                
                modalTxt.innerHTML = image.alt;
                modal.classList.add("appear");
                body.classList.add("appear");

                close.addEventListener("click", () => {
                    modal.classList.remove("appear");
                    body.classList.remove("appear");
                });
            });
        });