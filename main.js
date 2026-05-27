const starIconElms = document.querySelectorAll('img[alt="star icon"]');


starIconElms.forEach(elm => {
    elm.addEventListener("click", (e) => {
        if(elm.className === "empty") {
        e.target.src = "./assets/filled-star.svg";
        firstClick = false;
        } else {
            firstClick = true;
            e.target.src = "./assets/empty-star.svg";
        }
        elm.classList.toggle("filled");
        elm.classList.toggle("empty")
    })
});