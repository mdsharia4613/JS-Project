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
const historyList = document.getElementById('donation-history'); // history ul ধরলাম

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
            const historyCard = document.createElement('div');
            historyCard.className = "p-4 border rounded-lg shadow bg-white";
            historyCard.innerHTML = `
                <h3 class="font-bold text-lg text-green-600">Donated ${inputValue} BDT</h3>
                <p class="text-gray-700">To: ${cardTitle}</p>
                <p class="text-sm text-gray-500">${new Date().toLocaleString()}</p>
            `;
            historyList.appendChild(historyCard);

            // input ফাঁকা
            inputField.value = '';
        } else {
            alert('Please enter a valid amount');
        }
    });
});

// history button
// Tab
const historyTab = document.getElementById('show-history');
const donaiteTab = document.getElementById('show-donaite');
const donationSection = document.getElementById('donited-container');
const historySection = document.getElementById('donation-history-list')

// History tab click
historyTab.addEventListener('click', function () {
    historyTab.classList.add('bg-green-400', 'p-3');
    donaiteTab.classList.remove('bg-green-400', 'p-3');

    donationSection.classList.add('hidden');
    historySection.classList.remove('hidden');
});

// Donation tab click

donaiteTab.addEventListener('click', function(){
    donaiteTab.classList.add('bg-green-400', 'p-3');
    historyTab.classList.remove('bg-green-400', 'p-3');

    historySection.classList.add('hidden');
    donationSection.classList.remove('hidden');
});



