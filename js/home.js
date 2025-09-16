// document.getElementsByClassName('btn-donaite').addEventListener('click', function () {
//     const inputAmountField = document.getElementsByClassName('input-amount-field');
//     const inputValue = parseFloat(inputAmountField.value);

//     if (!isNaN(inputValue)) {
//         const amount = document.getElementsByClassName('amount');
//         const totalAmount = parseFloat(amount.innerText);
//         const newAmount = totalAmount + inputValue;
//         amount.innerText = newAmount;

//         const amountValueElement = document.getElementsByClassName('amount-value');
//         const currentValue = parseFloat(amountValueElement.innerText);

//         const updateValue = currentValue - inputValue;
//         amountValueElement.innerText = updateValue;
//         inputAmountField.value = '';
//     }
//     else {
//         alert('please amount')
//     }
// });

const balanceElement = document.getElementById('amount-value'); // উপরের balance

document.querySelectorAll('.btn-donaite').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card'); // parent card
        const inputField = card.querySelector('.input-amount-field'); // card এর input
        const amountElement = card.querySelector('.amount'); // card এর amount

        const inputValue = parseFloat(inputField.value);

        if (!isNaN(inputValue) && inputValue > 0) {
            // Card এর amount update
            let currentAmount = parseFloat(amountElement.innerText);
            currentAmount = currentAmount + inputValue;
            amountElement.innerText = currentAmount;

            // উপরের balance update
            let balance = parseFloat(balanceElement.innerText);
            updateBalance = balance - inputValue;
            balanceElement.innerText = updateBalance;

            // input ফাঁকা
            inputField.value = '';
        } else {
            alert('Please enter a valid amount');
        }
    });
});
