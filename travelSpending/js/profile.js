const dateEdit = document.querySelector('.date-edit');
const dateConfirm = document.querySelector('.date-confirm');

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

dateEdit.addEventListener('click',editDate,false);
dateConfirm.addEventListener('click',confirmeditDate,false);
