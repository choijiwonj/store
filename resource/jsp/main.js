//게시글 좋아요 
function addLike(){
    const pushHeartBtn = document.querySelector(".heartBtn");
            pushHeartBtn.innerHTML ='<i class="xi-heart xi-2x"></i>';
            pushHeartBtn.style.color ='red'; 
            pushHeartBtn.addEventListener("click",countPlus);
}
