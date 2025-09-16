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
const historyList = document.getElementById('donation-history'); //history section
const historySection = document.getElementById('donation-history-section');
const historyButton = document.getElementById('show-history');

// History section show or hidden
historyButton.addEventListener('click', () =>{
    historySection.classList.toggle('hidden');
})
document.querySelectorAll('.btn-donaite').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.card'); // parent card
        const inputField = card.querySelector('.input-amount-field'); // card এর input
        const amountElement = card.querySelector('.amount'); // card এর amount
         const cardTitle = card.querySelector('.card-title').innerText; 

        const inputValue = parseFloat(inputField.value);

        if (!isNaN(inputValue) && inputValue > 0) {
            // Card এর amount update
            let currentAmount = parseFloat(amountElement.innerText);
            currentAmount = currentAmount + inputValue;
            amountElement.innerText = currentAmount;

            // উপরের balance update
            let balance = parseFloat(balanceElement.innerText);
            let updateBalance = balance - inputValue;
            balanceElement.innerText = updateBalance;

            // Donation History
            const li = document.createElement('li');
            li.innerText = `Donated ${inputValue}BDT to "${cardTitle}"`;
            historyList.appendChild(li);

            // input ফাঁকা
            inputField.value = '';
        } else {
            alert('Please enter a valid amount');
        }
    });
});
