
document.getElementById('show-donaite').addEventListener('click', function(){
});

document.getElementById('btn-donaite').addEventListener('click', function(){
    const inputAmount = document.getElementById('input-amount').value; //input amount
    const inputAmountFlied = parseFloat(inputAmount);

    const amountValueElement = document.getElementById('amount');
    const currentAmount = parseFloat(amountValueElement.innerText);

    const balanceElement = document.getElementById('amount-value');
    const currentBalance = parseFloat(balanceElement.innerText);

    if(isNaN(inputAmountFlied) || inputAmountFlied > 0){
        //amount add
        const newAmount = inputAmountFlied + currentAmmount;
        amountValueElement.innerText = newAmount;

        const newBalance = currentBalance - inputAmountFlied;
        balanceElement.innerText = newBalance;

        // history add

        const historyList = document.getElementById('donation-history');
        const li = document.createElement('li');
        li.innerText =`${inputAmountFlied} BDT donated`;
        historyList.appendChild(li);

         document.getElementById('input-amount').value = '';
    }
    else{
        alert('please amount')
    }

})

