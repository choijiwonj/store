function click(){
    const $t1 = document.querySelector(".t1");
    const $t2 = document.querySelector(".t2");
    const $t3 = document.querySelector(".t3");
    const $background1 = document.querySelector(".background1");
    const $background2 = document.querySelector(".background2");
    const $background3 = document.querySelector(".background3");

   

    $t1.addEventListener("click", () => {
        $background1.style.display = "flex";
        $background2.style.display = "none";
        $background3.style.display = "none";

        console.log("t1");
    });

    $t2.addEventListener("click", () => {
        $background2.style.display = "flex";
        $background1.style.display = "none";
        $background3.style.display = "none";
        console.log("t2");
    });

    $t3.addEventListener("click", () => {
        $background3.style.display = "flex";
        $background1.style.display = "none";
        $background2.style.display = "none";
        console.log("t3");
    });

}

window.onload = click;