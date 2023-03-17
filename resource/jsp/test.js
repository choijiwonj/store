function addLike(){
    const pushHeartBtn = document.querySelector(".heartBtn");
            pushHeartBtn.innerHTML ='<i class="xi-heart xi-2x"></i>';
            pushHeartBtn.style.color ='red'; 
}
var count = 1324;
function countPlus(){
        count=count+1;
        document.querySelector(".like_count").innerHTML="좋아요 "+count +"개";
    }
    function addLike(){
        const pushHeartBtn = document.querySelector(".heartBtn");
                pushHeartBtn.innerHTML ='<i class="xi-heart xi-2x"></i>';
                pushHeartBtn.style.color ='red'; 
                  pushHeartBtn.addEventListener("click",countPlus);
    }

    const postReviewBtn = document.querySelector(".review_upload");
const addReview = document.querySelector('.input_review');
const newReview = document.querySelector('.comment');
const commenter = ['uuu', 'pdds','hooe','ddwwe'];  //db연결대신 배열로 선언


function uploadReview(){
    if(addReview.value.length > 0){
        const newComment = document.createElement("li");
        const deleteBtn = document.createElement('removeComment');
        const likeBtn = document.createElement('likeHeart');
        const commentervalue = Math.floor(Math.random() * commenter.length); //배열 길이만큼 무작위로 값을 생성
        const commenterPick = commenter[commentervalue];//무작위로 생성된 값을 고르도록
        newComment.innerHTML =  commenterPick + " " + addReview.value ;
        newReview.appendChild(newComment);
        newReview.style.fontSize ='small';
        likeBtn.innerHTML='<i class="xi-heart-o"></i>';
        newComment.appendChild(likeBtn);
        likeBtn.style.cursor ='pointer';
        likeBtn.style.float='right';
        likeBtn.style.marginLeft='-0.9rem';
        likeBtn.style.marginRight='0.8rem';
        likeBtn.addEventListener("click", pushHeart);
        deleteBtn.innerHTML='<i class="xi-trash-o"></i>';
        newComment.appendChild(deleteBtn);
        deleteBtn.style.cursor='pointer';
        deleteBtn.style.float='right';
        deleteBtn.addEventListener("click", removeComm);
        addReview.value="";
        addReview.focus();
      	}else{
        alert('댓글을 입력해 주세요');
    }
}

addReview.addEventListener("keypress",(e) => {
    if(addReview.value.length !== 0){
    uploadReview();
    }
}
);