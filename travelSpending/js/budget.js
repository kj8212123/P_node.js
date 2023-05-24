const closeDetail = document.querySelector('.close');
const aaa = document.querySelector('.try');

function close(){
    document.querySelector('.move-area').classList.toggle('hidden');
    // document.querySelector('.move-area').classList.toggle('show');

}

var showBudgetDetail = function(){
    //先查詢詳細資料再把資料傳進來
    close();
    
}

closeDetail.addEventListener('click',close);
aaa.addEventListener('click',showBudgetDetail);



//新增預算類型先拿掉
// const addBudgetCurreny = document.querySelector('.add-budget-currenry');
// var popBudgetCurrency = function (){
//     let infoModal=document.querySelector("#addBudegtCurrency");
//     console.log(`#{budgetDetail.budgetName}`)
//      infoModal.showModal();
// }
// addBudgetCurreny.addEventListener('click',popBudgetCurrency);
