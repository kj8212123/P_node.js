const dateEdit = document.querySelector('.date-edit');
const dateConfirm = document.querySelector('.date-confirm');
const footerItem = document.querySelectorAll('.footer-itme');

function editDate(){
   document.querySelector('.start-date').removeAttribute('readonly');
   document.querySelector('.end-date').removeAttribute('readonly');
   dateEdit.style.display='none';
   dateConfirm.removeAttribute('style');
}

function confirmeditDate(){
   document.querySelector('.start-date').setAttribute('readonly', true);
   document.querySelector('.end-date').setAttribute('readonly', true);
   dateConfirm.style.display='none';
   dateEdit.removeAttribute('style');
}

var footerGoPage= function footerGoPage(){
   console.log('111');
   document.querySelector('.now-page').classList.remove('now-page');
   this.classList.add('now-page');
}

dateEdit.addEventListener('click',editDate,false);
dateConfirm.addEventListener('click',confirmeditDate,false);
for(var i = 0; i<footerItem.length; i++){
   footerItem[i].addEventListener('click', footerGoPage, false);
}
