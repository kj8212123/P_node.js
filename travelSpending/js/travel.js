const footerItem = document.querySelectorAll('.footer-itme');


//footer icon 顏色變換
var footerColorChange = function footerColorChange(){
   // console.log(location.href);
   // console.log(location.pathname);
   const id = '#'+location.pathname.slice(1)
   const nowPage= document.querySelector(id);
   nowPage.classList.add('now-page');
}
window.addEventListener('load',footerColorChange,false)


//footer跳轉畫面
var footerGoPage= function footerGoPage(){
   // console.log('111');
   // console.log('111'+this.id);
   location.href='/'+this.id;
}
for(var i = 0; i<footerItem.length; i++){
   footerItem[i].addEventListener('click', footerGoPage, false);
}


